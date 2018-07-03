import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
      return (
        <div>
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                      <img src="/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>
                        Wayfarer
            </a>
            <div className="login-signup">
            <a  className="login-btn" href="/login">Log In</a>
            <a  className="signup-btn" href="/signup">Sign Up</a>
            </div>
          </nav>


        </div>
      )
   }
}

export default Header

