'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var Input = _react2['default'].createClass({
	displayName: 'Input',

	getInitialState: function getInitialState() {
		return {};
	},
	render: function render() {
		return _react2['default'].createElement('input', { className: this.props.className, onChange: this.handleChange });
	},
	handleChange: function handleChange(ev) {
		var self = this;

		var _props = this.props;
		var url = _props.url;
		var onValidate = _props.onValidate;

		var value = ev.target.value;

		clearTimeout(this.state.start_validation);

		var start_validation = setTimeout(function () {

			_axios2['default'].post(url, { value: value }).then(function (response) {
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

Input.defaultProps = {
	url: '/'
};

exports['default'] = Input;
module.exports = exports['default'];