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

var DocumentNumber = _react2['default'].createClass({
	displayName: 'DocumentNumber',

	getInitialState: function getInitialState() {
		return {};
	},
	render: function render() {
		return _react2['default'].createElement(_InputJs2['default'], _extends({}, this.props, { url: '/validate/DocumentNumber', placeholder: 'Document Number' }));
	}
});

exports['default'] = DocumentNumber;
module.exports = exports['default'];