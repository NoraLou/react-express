import React, { Component } from 'react';
import './Nav.css';
import Client from './Client';

const navData = Client.search();
console.log("navData", navData);

const NavBar = React.createClass({
  render() {
    return (
      <nav className="">
        <h1>"Hello World"</h1>
      </nav>
    );
  }
});

export default NavBar;
