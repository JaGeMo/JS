import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";


class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">DevConnector</h1>
                <p className="lead">DevConnector</p>
                <hr />
                <Link className="btn btn-lg btn-info mr-2" to="/register">Register</Link>
                <Link className="btn btn-lg btn-light" to="/login">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;