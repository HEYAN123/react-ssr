import Routes from '../Routes';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { getServerStore } from '../store';
import { matchRoutes } from 'react-router-config';

// 服务器端对应地也要包一层route，并且与客户端数据同步
const render = (req) => {
    // 匹配当前路由
    const matchedRoutes = matchRoutes(Routes, req.path);

    // 请求服务器数据函数组成的数组
    const promises = [];
    matchedRoutes.forEach(element => {
        // 如果某个路由指向的组件中包含请求数据的方法loadData
        if(element.route.loadData) {
            // 加入数组
            promises.push(element.route.loadData(getServerStore));
        }
    });
    
    return promises;
    
};

export default render;