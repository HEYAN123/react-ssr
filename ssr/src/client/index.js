// 为了完成同构（浏览器端绑定事件）
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from '../Routes';
import { getClientStore } from '../store';
import { Provider } from 'react-redux';

const App = () => {
    return (
        <Provider store={getClientStore}>
            <BrowserRouter>
                <div>
                    {
                        Routes.map(r=> {
                           return <Route {...r} />
                        })
                    }
                </div>
            </BrowserRouter>
        </Provider>
    )
}

// 客户端在服务端的基础上进行渲染,插入js文件
ReactDom.hydrate(<App />, document.getElementById('root'));