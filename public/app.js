'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = main;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _componentsDocumentNumberJs = require('./components/DocumentNumber.js');

var _componentsDocumentNumberJs2 = _interopRequireDefault(_componentsDocumentNumberJs);

var _componentsInputJs = require('./components/Input.js');

var _componentsInputJs2 = _interopRequireDefault(_componentsInputJs);

function onValid(data) {
	console.log('onValid', data);
}

var App = _react2['default'].createElement(
	'div',
	null,
	_react2['default'].createElement(_componentsDocumentNumberJs2['default'], null),
	_react2['default'].createElement(_componentsInputJs2['default'], { url: '/validate/DocumentNumber', onValidation: onValid })
);

function main() {
	_reactDom2['default'].render(App, document.getElementById('app'));
}

module.exports = exports['default'];