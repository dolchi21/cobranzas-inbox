import React from 'react';
import { Link } from 'react-router';

import './NotFound.css';

class NotFound extends React.Component {
    
    // eslint-disable-next-line
    constructor (props) { super(props) }

    render () {
        return (
            <div className="component NotFound">
                <div>This is not the page you are looking for ...</div>
                <Link to="/">Go home</Link>
            </div>
            );
    }

}

export default NotFound;