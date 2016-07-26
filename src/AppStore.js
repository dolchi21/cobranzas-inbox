import { applyMiddleware, combineReducers, createStore } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import AppReducer from './reducers/AppReducer';

var middlewares = applyMiddleware(logger(), thunk);

var reducers = combineReducers(AppReducer, middlewares);

var store = createStore(reducers);

export default store;