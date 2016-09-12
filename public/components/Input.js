'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _apiValidateJs = require('../api/validate.js');

var API = _interopRequireWildcard(_apiValidateJs);

var Input = _react2['default'].createClass({
	displayName: 'Input',

	getInitialState: function getInitialState() {
		return {
			loading: false,
			token: null
		};
	},
	render: function render() {
		var _classNames;

		var className = (0, _classnames2['default'])((_classNames = {}, _defineProperty(_classNames, this.props.className, true), _defineProperty(_classNames, 'alert-warning', this.state.loading), _defineProperty(_classNames, 'alert-success', !this.state.loading && !!this.state.token), _classNames));
		return _react2['default'].createElement('input', { className: className, style: this.props.style, placeholder: this.props.placeholder, onChange: this.handleChange });
	},
	handleChange: function handleChange(ev) {
		var self = this;
		var onValidation = this.props.onValidation;

		var value = ev.target.value;

		clearTimeout(this.state.start_validation);
		self.setState({ token: null });

		var start_validation = setTimeout(function () {

			self.setState({ loading: true });

			self.validate(value).then(function (token) {
				self.setState({ loading: false, token: token });
				self.props.onValidation(token);
			});
		}, 1000);

		this.setState({
			value: value,
			start_validation: start_validation
		});
	},
	validate: function validate(value) {
		var self = this;

		var url = this.props.url;

		return API.validate(url, value);
	}
});

Input.defaultProps = {
	url: '/'
};

exports['default'] = Input;
module.exports = exports['default'];