import React from 'react';
import './Header.css';

/**
 * Define Header, a React component of Project 4, Problem 3.
 */
class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className ="header-container">
              <h1 className = "header-title">Software Co Project 4!!!!</h1>
            </div>
        );
    }
}

export default Header;