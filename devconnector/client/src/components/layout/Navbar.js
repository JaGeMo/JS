import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
      <div className="container">
        <a className="navbar-brand" href="landing.html">DevConnector</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mobile-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            <Link className="btn btn-lg btn-info mr-2" to="/register">Register</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-lg btn-light" to="/login">Login</Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
    )
  }
}

export default Navbar;
