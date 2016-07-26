import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import moment from 'moment';

import './App.css';

class App extends Component {
	//constructor(props){super(props)}
	render() {
		var className = classNames('component App', this.props.className);
		return (
			<div className={className}>
				<div className="flex">
					<div>
						<ul className="nav nav-pills nav-stacked">
							<li><Link to="user">User</Link></li>
							<li><Link to="user/bio">UserBio</Link></li>
							<li>
								<button onClick={this.onReload.bind(this)}>Reload</button>
							</li>
						</ul>
					</div>
					<div>{this.props.children}</div>
				</div>
				<div>
					<div>{this.props.store.reload}</div>
					<div>{moment(this.props.store.timestamp).calendar()}</div>
				</div>
			</div>
			);
	}
	onReload(){
		this.props.onReload();
	}
}

App.defaultProps = {}

export default App;
