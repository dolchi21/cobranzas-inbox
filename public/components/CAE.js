'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _InputJs = require('./Input.js');

var _InputJs2 = _interopRequireDefault(_InputJs);

var CAE = _react2['default'].createClass({
	displayName: 'CAE',

	getInitialState: function getInitialState() {
		return {};
	},
	render: function render() {
		return _react2['default'].createElement(_InputJs2['default'], _extends({}, this.props, { url: '/validate/CAE', placeholder: 'CAE' }));
	}
});

exports['default'] = CAE;
module.exports = exports['default'];