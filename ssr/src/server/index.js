import express from 'express';
// 用于在服务器端将vdom渲染成字符串
import { renderToString } from 'react-dom/server';
// 将生成html的操作抽离到server-route
import render from './server-route';
import proxy from 'express-http-proxy';
import { StaticRouter, Route } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { getServerStore } from '../store';
import Routes from '../Routes';

const app = express();
// 开启静态资源（为了使用生成的客户端index.js
app.use(express.static('public'));
// // 将 jsx的虚拟dom转换为真实dom
// const content = renderToString(<Home />);

app.use('/api', proxy('http://localhost:3001', {
    proxyReqPathResolver: function(req) {
        return '/api'+req.url
    }
}));

// 接受所有请求，进去后判断路由
app.get('*', function(req, res) {
    const promises = render(req);
    Promise.all(promises).then(()=>{
        const content = renderToString(
            <Provider store={getServerStore}>
                <StaticRouter location={req.path}>
                    <div>
                        {
                            Routes.map(r=>(
                                <Route {...r} />
                            ))
                        }
                    </div>
                </StaticRouter>
            </Provider>
        );
        console.log(content);
        res.send(`
        <html>
            <head>
                <title>ssr</title>
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                    // 注水（将服务端store数据注入浏览器全局
                    window.context = {
                        state: ${JSON.stringify(getServerStore.getState())}
                    }
                </script>
                <script src="/index.js"></script>
            </body>
        </html>
    `); 
    });
});

app.listen(3002, ()=>{
    console.log('listen 3002');
})