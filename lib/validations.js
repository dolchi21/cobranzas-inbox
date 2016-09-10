var jwt = require('./jwt');

function documentNumber(number){
	
	if (!number || number == 'aa') { return null; }

	var json = {
		type: 'document_number',
		value : number
	}

	return jwt.sign(json);

}
function CAE(number){
	
	if (!number) { return null; }

	var json = {
		type : 'cae',
		value : number
	}

	return jwt.sign(json);

}

module.exports = {
	documentNumber,
	CAE
}