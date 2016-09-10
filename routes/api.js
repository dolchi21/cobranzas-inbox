var express = require('express');
var router = express.Router();


var validations = require('../lib/validations');


router.post('/validate/DocumentNumber', function(req, res, next){

	var document_number = req.body.document_number;

	var token = validations.documentNumber(document_number);

	var data = {
		valid : !!token,
		token
	}

	res.json({
		data
	});

});

router.post('/validate/CAE', function(req, res, next){

	var CAE = req.body.CAE;

	var token = validations.CAE(cae);

	var data = {
		valid : !!token,
		token
	}

	res.json({
		data
	});

});

module.exports = router;
