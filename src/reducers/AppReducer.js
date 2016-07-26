const RELOAD = 'APP/RELOAD';

function reducer(state = { timestamp : Date.now() }, action) {
    switch (action.type) {
        
        case RELOAD:
        console.log('RELOAD', state, state.reload);
        var count = state.reload || 0;
        return Object.assign({}, state, {
            reload : ++count
        });

        default:
        return state;
        
    }
}

export default reducer;