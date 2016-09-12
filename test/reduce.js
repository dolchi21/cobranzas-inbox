describe('Array.proptotype.reduce', function(){

	it('should merge the jsons.', function(){

		var arr = [{
			cae : { value : '987654321' }
		}]
		arr.push({
			cae : { value : '1234' }
		});
		arr.push({
			document_number : { value : '0002-00001234' }
		});
		arr.push({
			purchase_orders : {
				value : [1234, 9876]
			}
		});

		var json = arr.reduce(function(sum, item){
			return Object.assign({}, sum, item);
		});

		console.log(json)

	});

});