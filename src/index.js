import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './App.js';
import User from './components/User';
import UserBio from './components/User/Bio';
import NotFound from './components/NotFound';

var router = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="user" component={User}>
                <Route path="bio" component={UserBio}/>
            </Route>
        </Route>
        <Route path="*" component={NotFound}/>
    </Router>
    );

ReactDOM.render(
    router,
    document.getElementById('root')
);
