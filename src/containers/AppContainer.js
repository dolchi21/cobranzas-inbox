import React from 'react';
import { connect } from 'react-redux';

import App from '../App';
import * as AppActions from '../actions/AppActions'

var AppContainer = connect(function mapStateToProps(state){
    return { store : state.AppReducer };
}, function mapDispatchToProps(dispatch){
    return {
        onReload : () => dispatch( AppActions.reload() )
    }
})(App);

export default AppContainer;