import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div>
        <p>Login</p>
        <button onClick={this.props.authenticate}>
          Log In
        </button>
      </div>
    )
  }
}

export default Login;