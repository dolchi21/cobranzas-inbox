function reducer(state = {}, action) {
    switch (action.type) {
        
        case 'APP/RELOAD':
        var count = state.reload || 0;
        return Object.assign({}, state, { reload : reload++ });

        default:
        return state;
        
    }
}

export default reducer;