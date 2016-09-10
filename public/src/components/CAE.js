import React from 'react';
import axios from 'axios';

var CAE = React.createClass({
	getInitialState : function getInitialState() {
		return {}
	},
	render : function(){
		return (<input className={this.props.className} onChange={this.handleChange} value={this.state.value || ''}/>);
	},
	handleChange : function handleChange(ev){
		var self = this;
		var value = ev.target.value;

		clearTimeout(this.state.start_validation);

		var start_validation = setTimeout(function(){

			axios.post('/api/validate/CAE/', {
				document_number : value
			}).then(function(response){
				
				var { token } = response.data.data || {};

				if (!token) { return; }

				self.props.onValidate(token);

			});

		}, 1000);

		this.setState({
			value,
			start_validation
		});
	}
});

export default CAE;
