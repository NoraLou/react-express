import React, { Component } from 'react';
import './Nav.css';
import Client from './Client';
import './index.css';

// let navData;

// Client.search().then(function(data){
//   navData = data;
// })

// console.log("navData", navData)


class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navItems: []
    }
  }

  componentDidMount: function() {

  }



  render() {
    return (
      <nav className="nav-test">
        <ul>
          {this.state.navItems.map((navItem, idx)=> (
            <li key={idx}>navItem.label</li>
          ))}
        </ul>
      </nav>
    );
  }

}

export default NavBar;

