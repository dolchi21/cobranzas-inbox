var { JWT_SECRET } = require('../config');

var jwt = require('jsonwebtoken');
var uuid = require('node-uuid');

function JWT(){}

var defaultOptions = {
	issuer : 'inbox-validator',
	audience : 'cobranzas',
	expiresIn : '20m'
}

JWT.sign = function sign(payload, options) {
	var jwtid = uuid.v4();
	var opt = Object.assign({ jwtid }, defaultOptions, options || {});
	return jwt.sign(payload, JWT_SECRET, opt);
}
JWT.verify = function verify(token, options){
	var opt = Object.assign({}, defaultOptions, options || {});
	return jwt.verify(token, JWT_SECRET, opt);
}
JWT.decode = function decode(token, options){
	var opt = Object.assign({
		complete : true
	}, options || {});
	return jwt.decode(token, opt);
}
JWT.middleware = require('express-jwt')({
	secret : JWT_SECRET
});

module.exports = JWT;
