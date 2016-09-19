import React, { Component } from 'react';
import './Nav.css';
import Client from './Client';
import './index.css';



const NavBar = React.createClass ({
  getInitialState: function() {
    return {
      navItems: []
    };
  },

  componentDidMount: function() {
    Client.search().then((data)=> (
      this.setState({
        navItems: data
      })
    ))
  },

  render: function() {
    return (
      <nav className="nav-test">
        <ul>
          {this.state.navItems}
        </ul>
      </nav>
    )
  }
});



export default NavBar;

