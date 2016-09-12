import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import DocumentNumber from './components/DocumentNumber.js';
import Input from './components/Input.js';
import AsyncComponent from './components/AsyncComponent.js';


var App = React.createClass({
	getInitialState : function getInitialState(){
		return {
			tokens : {}
		}
	},
	render : function(){
		var onComponentValidation = this.onComponentValidation;

		var tokens = Object.keys(this.state.tokens).map(function(component_name){
			var token = this.state.tokens[component_name]
			return token;
		}.bind(this));

		return (
			<div>
				<DocumentNumber onValidation={onComponentValidation('DocumentNumber')}/>
				<Input url={'/validate/CAE'} onValidation={onComponentValidation('CAE')}/>
				<AsyncComponent url="/components/Input.js" props={{ url : '/validate/DocumentNumber', onValidation : onComponentValidation('DocumentNumber') }}/>
				<button onClick={this.handleSubmit}>Submit</button>
				<pre>
					{JSON.stringify(tokens, null, 2)}
				</pre>
			</div>
			);
	},
	handleSubmit : function handleSubmit(ev) {
		
		var tokens = Object.keys(this.state.tokens).map(function(component_name){
			var token = this.state.tokens[component_name]
			return token;
		}.bind(this));

		axios.post('/api/validate/', {
			tokens
		}).then(function(response){
			console.log(response.data)
		});

	},
	onValidation : function onValidation(component_name, token){
		this.setToken(component_name, token);
	},
	setToken : function setToken(component_name, token){
		var old_tokens = this.state.tokens;
		var new_tokens = Object.assign({}, old_tokens, {
			[component_name] : token
		});
		this.setState({
			tokens : new_tokens
		});
	},
	onComponentValidation : function onComponentValidation(name){
		return this.onValidation.bind(this, name);
	}
});

export default function main(){
	ReactDOM.render(<App/>, document.getElementById('app'));
}
