'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var DocumentNumber = _react2['default'].createClass({
	displayName: 'DocumentNumber',

	getInitialState: function getInitialState() {
		return {};
	},
	render: function render() {
		return _react2['default'].createElement('input', { className: this.props.className, onChange: this.handleChange, value: this.state.value || '' });
	},
	handleChange: function handleChange(ev) {
		var self = this;
		var value = ev.target.value;

		clearTimeout(this.state.start_validation);

		var start_validation = setTimeout(function () {

			_axios2['default'].post('/api/validate/DocumentNumber/', {
				document_number: value
			}).then(function (response) {
				var _ref = response.data.data || {};

				var token = _ref.token;

				if (!token) {
					return;
				}

				self.props.onValidate(token);
			});
		}, 1000);

		this.setState({
			value: value,
			start_validation: start_validation
		});
	}
});

exports['default'] = DocumentNumber;
module.exports = exports['default'];