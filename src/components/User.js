import React from 'react';
import { Link } from 'react-router';

class User extends React.Component {
	
	// eslint-disable-next-line
	constructor (props) {
		super(props);
	}

	render () {
		if (this.props.children) { return this.props.children; }
		var user = this.props.user;
		return (
			<div className="component User">
				<h4>{user.username}</h4>
				<p>user <Link to="user/bio">bio</Link></p>
			</div>
			);
	}

}
User.defaultProps = {
	user : {
		username : 'nn'
	}
}

export default User;