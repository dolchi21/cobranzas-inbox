import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

import './App.css';

class App extends Component {
	render() {
		var className = 'component App ' + this.props.className;
		return (
			<div className={className}>
				<div>
					<Link to="user">User</Link>
					<Link to="user/bio">UserBio</Link>
				</div>
				<div>{this.props.children}</div>
			</div>
			);
	}
}

export default App;
