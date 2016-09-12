'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = main;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _componentsDocumentNumberJs = require('./components/DocumentNumber.js');

var _componentsDocumentNumberJs2 = _interopRequireDefault(_componentsDocumentNumberJs);

var _componentsInputJs = require('./components/Input.js');

var _componentsInputJs2 = _interopRequireDefault(_componentsInputJs);

var _componentsAsyncComponentJs = require('./components/AsyncComponent.js');

var _componentsAsyncComponentJs2 = _interopRequireDefault(_componentsAsyncComponentJs);

var App = _react2['default'].createClass({
	displayName: 'App',

	getInitialState: function getInitialState() {
		return {
			tokens: {}
		};
	},
	render: function render() {
		var onComponentValidation = this.onComponentValidation;

		var tokens = Object.keys(this.state.tokens).map((function (component_name) {
			var token = this.state.tokens[component_name];
			return token;
		}).bind(this));

		return _react2['default'].createElement(
			'div',
			null,
			_react2['default'].createElement(_componentsDocumentNumberJs2['default'], { onValidation: onComponentValidation('DocumentNumber') }),
			_react2['default'].createElement(_componentsInputJs2['default'], { url: '/validate/CAE', onValidation: onComponentValidation('CAE') }),
			_react2['default'].createElement(_componentsAsyncComponentJs2['default'], { url: '/components/Input.js', props: { url: '/validate/DocumentNumber', onValidation: onComponentValidation('DocumentNumber') } }),
			_react2['default'].createElement(
				'button',
				{ onClick: this.handleSubmit },
				'Submit'
			),
			_react2['default'].createElement(
				'pre',
				null,
				JSON.stringify(tokens, null, 2)
			)
		);
	},
	handleSubmit: function handleSubmit(ev) {

		var tokens = Object.keys(this.state.tokens).map((function (component_name) {
			var token = this.state.tokens[component_name];
			return token;
		}).bind(this));

		_axios2['default'].post('/api/validate/', {
			tokens: tokens
		}).then(function (response) {
			console.log(response.data);
		});
	},
	onValidation: function onValidation(component_name, token) {
		this.setToken(component_name, token);
	},
	setToken: function setToken(component_name, token) {
		var old_tokens = this.state.tokens;
		var new_tokens = Object.assign({}, old_tokens, _defineProperty({}, component_name, token));
		this.setState({
			tokens: new_tokens
		});
	},
	onComponentValidation: function onComponentValidation(name) {
		return this.onValidation.bind(this, name);
	}
});

function main() {
	_reactDom2['default'].render(_react2['default'].createElement(App, null), document.getElementById('app'));
}

module.exports = exports['default'];