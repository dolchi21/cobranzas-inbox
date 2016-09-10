import React from 'react';
import ReactDOM from 'react-dom';

import DocumentNumber from './components/DocumentNumber.js';
import Input from './components/Input.js';

function onValid(data){
	console.log('onValid', data);
}

var App = (
	<div>
		<DocumentNumber/>
		<Input url={'/validate/DocumentNumber'} onValidation={onValid}/>
	</div>
	);

export default function main(){
	ReactDOM.render(App, document.getElementById('app'));
}
