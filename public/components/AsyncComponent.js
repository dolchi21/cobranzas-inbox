'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var AsyncComponent = _react2['default'].createClass({
	displayName: 'AsyncComponent',

	getInitialState: function getInitialState() {
		return { Component: null };
	},
	componentWillMount: function componentWillMount() {
		setTimeout((function () {
			this.loadComponent();
		}).bind(this), 1000);
	},
	render: function render() {
		var Component = this.state.Component;

		if (!Component) {
			return _react2['default'].createElement(
				'span',
				null,
				'Loading ',
				this.props.url,
				' ...'
			);
		}
		return _react2['default'].createElement(Component, this.props.props);
	},
	loadComponent: function loadComponent() {
		var self = this;

		var url = this.props.url;

		return window.SystemJS['import'](url).then(function (Component) {
			self.setState({
				Component: Component
			});
			return Component;
		});
	}
});

exports['default'] = AsyncComponent;
module.exports = exports['default'];