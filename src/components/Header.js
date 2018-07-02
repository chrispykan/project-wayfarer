import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm'


class Header extends Component {
    render() {
      return (
        <div>
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
              <img src="/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>
                Wayfarer
            </a> {/* HEADER Login button */}
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
              Log In
            </button>

            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">

                    <h5 class="modal-title" id="exampleModalCenterTitle">Log In</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                  </div>
                  <div class="modal-body">
                    <form role="form">
                      <div className="form-group">
                        <label>username</label>
                        <input type="emial" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>password</label>
                        <input type="password" className="form-control" />
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    {/* Form login button */}
                    <button type="button" class="btn btn-primary">Log In</button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )
   }
}

export default Header

