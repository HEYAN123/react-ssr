import express from 'express';
// 用于在服务器端将vdom渲染成字符串
// import { renderToString } from 'react-dom/server';
// 将生成html的操作抽离到server-route
import render from './server-route';

const app = express();
// 开启静态资源（为了使用生成的客户端index.js
app.use(express.static('public'));
// // 将 jsx的虚拟dom转换为真实dom
// const content = renderToString(<Home />);

// 接受所有请求，进去后判断路由
app.get('*', function(req, res) {
    res.send(render(req));
});

app.listen(3002, ()=>{
    console.log('listen 3002');
})