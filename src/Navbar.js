import React from 'react';
import ReactDOM from 'react-dom';
/* Add NavLink to importer */
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

/* Add basic styling for NavLinks */
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

export default function Navbar() {
    return (
    <div>
        <NavLink
            to="/"
            exact
            style={link}
            activeStyle={{
                background:'darkblue'
            }}
            >About</NavLink>

        <NavLink
            to="/login"
            exact
            style={link}
            activeStyle={{
                background:'darkblue'
            }}
            >Login</NavLink>
    </div>
    )
}