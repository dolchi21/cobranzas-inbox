import React from 'react';
import axios from 'axios';

var Input = React.createClass({
	getInitialState : function getInitialState(){
		return {}
	},
	render : function render(){
		return (
			<input className={this.props.className} onChange={this.handleChange}/>
			);
	},
	handleChange : function handleChange(ev){
		var self = this;

		var { url, onValidate } = this.props;

		var value = ev.target.value;

		clearTimeout(this.state.start_validation);

		var start_validation = setTimeout(function(){

			axios.post(url, { value }).then(function(response){
				
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

Input.defaultProps = {
	url : '/'
}

export default Input;