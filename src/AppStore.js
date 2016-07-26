import { applyMiddleware, combineReducers, createStore } from 'redux';

import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import AppReducer from './reducers/AppReducer';

var middlewares = applyMiddleware(thunk, createLogger());

var reducers = combineReducers({
    AppReducer
});

var store = createStore(reducers, middlewares);

export default store;