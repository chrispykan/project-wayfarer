import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';


class Header extends Component {
    
  renderLinks() {
    if (this.props.authenticated) {
      return [
        <li key={1} className="nav-item">
          <Link className="nav-link" to="/signout">Sign Out</Link>
        </li>
      ]
    } else {
      return [
        <li key={1} className="nav-item">
          <Link className="nav-link" to="/signin">Sign In</Link>
        </li>,
        <li key={2} className="nav-item">
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
      ]
    }
  }
  
   
  render() {
    return (
      <div className="headerStyle">
       <nav className="navbar navbar-light navColor">
         <img src="" alt=""/>
         <Link to="/" className="headerTitle">Wayfarer</Link>
         <ul className="nav navbar-nav">
            {this.renderLinks()}
          </ul>
        </nav>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps,)(Header)