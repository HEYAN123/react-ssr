import React from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home';
import Yard from './containers/Yard';

export default (
    <div>
        <Route path="/" exact component={Home}></Route>
        <Route path='/yard' exact component={Yard}></Route>
    </div>
);