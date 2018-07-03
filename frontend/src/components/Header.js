import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
      return (
        <div className="headerStyle">
         <nav className="navbar navbar-light navColor">
           <img src="" alt=""/>
           <a href="#"> <h3 className="headerTitle">Wayfarer</h3> </a>


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