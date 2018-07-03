import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm'


class Header extends Component {
    render() {
      return (
        <div className="headerStyle">
          <nav className="navbar navbar-light navColor">
            <img src="" alt=""/>
            <a href="#"> <h3 className="headerTitle">Wayfarer</h3> </a>
          </nav>
        </div>
      )
   }
}

export default Header
