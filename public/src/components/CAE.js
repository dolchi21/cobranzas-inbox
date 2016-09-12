import React from 'react';
import axios from 'axios';

import Input from './Input.js';

var CAE = React.createClass({
	getInitialState : function getInitialState() {
		return {}
	},
	render : function(){
		return <Input {...this.props} url={'/validate/CAE'} placeholder="CAE"/>;
	}
});

export default CAE;
