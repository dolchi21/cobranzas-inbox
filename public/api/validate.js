'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.validate = validate;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _configJs = require('./config.js');

function validate(url, value) {

	return _axios2['default'].post(_configJs.baseURL + url, {
		value: value
	}).then(onTokenResponse);
}

function onTokenResponse(response) {
	var _ref = response.data.data || {};

	var token = _ref.token;

	return token;
}