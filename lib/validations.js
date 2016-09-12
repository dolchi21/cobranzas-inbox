var jwt = require('./jwt');

function documentNumber(number){
	
	var test = /^\d{4}-\d{8}$/.exec(number);
	if (!test) { return null; }

	var data = {
		'document_number' : {
			value : number
		}
	}
	return new Promise(function(resolve, reject){
		var token = jwt.sign({data});
		resolve(token);
	});

}
function CAE(number){
	
	var test = /^\d{11}$/.exec(number);
	if (!test) { return null; }

	var data = {
		cae : {
			value : number
		}
	}

	return new Promise(function(resolve, reject){
		var token = jwt.sign({data});
		resolve(token);
	});

}
function purchaseOrders(pos){

	if (!pos.length) { return null; }

	var data = {
		purchase_orders : {
			value : pos
		}
	}

	return new Promise(function(resolve, reject){
		var token = jwt.sign({data});
		resolve(token);
	});

}

module.exports = {
	documentNumber,
	CAE,
	purchaseOrders
}