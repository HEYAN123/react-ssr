// import React from 'react';
// import { Route } from 'react-router-dom';
import Home from './containers/Home';
import Yard from './containers/Yard';

export default [
    {
        path: '/',
        component: Home,
        exact: true,
        loadData: Home.loadData,
        key: 'home'
    },
    {
        path: '/yard',
        component: Yard,
        exact: true,
        key: 'yard'
    }
];
