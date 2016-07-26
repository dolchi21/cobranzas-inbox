import React from 'react';
import { Link } from 'react-router';

class User extends React.Component {
	
	// eslint-disable-next-line
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div className="User">
				<h4>Username</h4>
				<p>user <Link to="bio">bio</Link></p>
			</div>
			);
	}

}

export default User;