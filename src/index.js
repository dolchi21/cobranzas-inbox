import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider, connect } from 'react-redux';

import AppStore from './AppStore';

import AppContainer from './containers/AppContainer';

import User from './components/User';
import UserBio from './components/User/Bio';
import NotFound from './components/NotFound';

var router = (
    <Provider store={AppStore}>
        <Router history={hashHistory}>
            <Route path="/" component={AppContainer}>
                <Route path="user" component={User}>
                    <Route path="bio" component={UserBio}/>
                </Route>
            </Route>
            <Route path="*" component={NotFound}/>
        </Router>
    </Provider>
    );

ReactDOM.render(
    router,
    document.getElementById('root')
);
