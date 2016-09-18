import React, { Component } from 'react';
import './Nav.css';
import Client from './Client';

const navData = Client.search();
console.log("navData", navData);

//http://stackoverflow.com/questions/34607841/react-router-nav-bar-example

// https://github.com/Danwhy/learn-react-router

const NavBar = React.createClass({
  render() {
    return (
      <nav className="">
        <ul>
        </ul>
      </nav>
    );
  }
});

export default NavBar;
