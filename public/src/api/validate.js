import axios from 'axios';

import { baseURL } from './config.js';

export function validate(url, value){

	return axios.post(baseURL + url, {
		value
	}).then(onTokenResponse);

}

function onTokenResponse(response){
	var { token } = response.data.data || {};
	return token;
}
