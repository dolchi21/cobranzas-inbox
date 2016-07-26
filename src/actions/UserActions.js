import axios from 'axios';

export function load(){
    return function(dispatch, getState){
        axios.get('/api/v1/client/').then(function(user){
            dispatch({
                type : 'USER/LOAD_SUCCESS',
                payload : user
            });
        });
        return dispatch({ type : 'USER/LOAD_START' });
    }
}

export function clear(){
    return { type : 'USER/CLEAR' }
}