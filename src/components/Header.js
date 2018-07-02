import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm'


class Header extends Component {
    render() {
      return (
        <div className="headerStyle">
          <nav className="navbar navbar-light navColor">
          <a className="navbar-brand" href="#">
          <img src="/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>
            <h3>Wayfarer</h3>
          </a>
          </nav>
        </div>
      )
   }
}

export default Header

