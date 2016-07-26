import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './App.js';
import NotFound from './components/NotFound.js';

var router = (
    <Router history={hashHistory}>
        <Route path="/" component={App}></Route>
        <Route path="*" component={NotFound}/>
    </Router>
    );

ReactDOM.render(
    router,
    document.getElementById('root')
);
