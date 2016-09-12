import React from 'react';
import axios from 'axios';
import classNames from 'classnames';


import * as API from '../api/validate.js';


var Input = React.createClass({
	getInitialState : function getInitialState(){
		return {
			loading : false,
			token : null
		}
	},
	render : function render(){
		var className = classNames({
			[this.props.className] : true,
			'alert-warning' : this.state.loading,
			'alert-success' : !this.state.loading && !!this.state.token
		});
		return (
			<input className={className} style={this.props.style} placeholder={this.props.placeholder} onChange={this.handleChange}/>
			);
	},
	handleChange : function handleChange(ev){
		var self = this;
		var { onValidation } = this.props;

		var value = ev.target.value;

		clearTimeout(this.state.start_validation);
		self.setState({ token : null });

		var start_validation = setTimeout(function(){
			
			self.setState({ loading : true });
			
			self.validate(value).then(function(token){
				self.setState({ loading : false, token });
				self.props.onValidation(token);
			});
			
		}, 1000);

		this.setState({
			value,
			start_validation
		});
	},
	validate : function validate(value){
		var self = this;

		var { url } = this.props;

		return API.validate(url, value);
	}
});

Input.defaultProps = {
	url : '/'
}

export default Input;