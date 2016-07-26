import { applyMiddleware, combineReducers, createStore } from 'redux';

import MainLayoutReducer from './reducers/MainLayoutReducer';

var reducers = combineReducers(MainLayoutReducer);

var store = createStore(reducers);

export default store;