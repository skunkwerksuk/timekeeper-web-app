import React from "react";
import { Link, Redirect } from "react-router-dom";

import timeImage from '../../images/time-management-clock.jpg';

class Login extends React.Component {
  render() {
    if (this.props.authed) {
      return (
        <Redirect to='/dashboard' />
      );
    } else {
      return (
        <div className="row">
          <div>
              {this.props.authed ? 'LOGGED IN' : 'LOGGED OUT'}
              <button onClick={this.unauthenticate}>logout</button>
            </div>
          <div className="one-half">
            <img src={timeImage} alt="timekeeper-image" />
          </div>
          <div className="one-half login">
            <h1 className="title">TIMEKEEPER</h1>
            <p className="subtitle">Welcome back! Please login to your account.</p>
            <form>
              <div>
                <label for="username">Username</label>
                <input type="string" id="username" />
              </div>
              <div>
                <label for="password">Password</label>
                <input type="string" id="password" />
              </div>
            </form>
            {/* <Link onClick={this.props.authenticate} to="/protected">protected</Link> */}
            <button onClick={this.props.authenticate}>
              Login
            </button>
          </div>
        </div>
      )
    }
  }
}

export default Login;