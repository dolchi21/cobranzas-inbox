import React from 'react';
import axios from 'axios';

import Input from './Input.js';

var DocumentNumber = React.createClass({
	getInitialState : function getInitialState() {
		return {}
	},
	render : function(){
		return <Input {...this.props} url={'/validate/DocumentNumber'} placeholder="Document Number"/>;
	}
});

export default DocumentNumber;
