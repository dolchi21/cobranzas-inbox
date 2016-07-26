const CHANGE = 'USER/CHANGE';
const CLEAR = 'USER/CLEAR';
const LOAD = 'USER/LOAD';
const LOAD_START = 'USER/LOAD_START';
const LOAD_SUCCESS = 'USER/LOAD_SUCCESS';


import User from '../models/User.js';


export default function reducer(state = {}, action){

	switch (action.type) {

		case CHANGE:
		return Object.assign({}, state, { user : action.payload });

		case CLEAR:
		return Object.assign({}, state, { user : null });

		case LOAD:
		return Object.assign({}, state, { user : null });

		case LOAD_SUCCESS:
		return Object.assign({}, state, { user : action.payload });

	}
	return state;

}