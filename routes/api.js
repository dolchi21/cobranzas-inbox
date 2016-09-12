var express = require('express');
var router = express.Router();

var jwt = require('../lib/jwt');

var validations = require('../lib/validations');

router.post('/validate', function(req, res, next){

	var tokens = req.body.tokens;

	var payloads = tokens.map(function(token){
		try {
			return jwt.verify(token).data;
		} catch (e) {
			return null;
		}
	}).filter(function(item){
		return !!item;
	});

	var data = payloads.reduce(function(sum = {}, attribute){
		return Object.assign(sum, attribute);
	});

	res.json({ data });

});

router.post('/validate/DocumentNumber', function(req, res, next){

	var document_number = req.body.value;

	validations.documentNumber(document_number).then(function(token){

		var data = {
			valid : !!token,
			token
		}

		return res.json({ data });

	});

});

router.post('/validate/CAE', function(req, res, next){

	var CAE = req.body.value;

	validations.CAE(CAE).then(function(token){

		var data = {
			valid : !!token,
			token
		}

		return res.json({ data });

	});

});

module.exports = router;
