import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Login from './Login';
import PrivateRoute from './PrivateRoute';
import App from './App/App';

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

class MyRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authed: true
    }
  }
  authenticate = () => {
    console.log('Authenticated')
    this.setState({
      authed: true
    })
  }
  unauthenticate = () => {
    console.log('Unauthenticated')
    this.setState({
      authed: false
    })
  }
  render () {
    return (
      <Router basename="/">
        <div>
          <Switch>
            <Route path="/" exact render={(props) => <Login {...props} authenticate={this.authenticate} authed={this.state.authed} />} />
            <Route path="/public" exact component={Public} />
            <Route path="/login" render={(props) => <Login {...props} authenticate={this.authenticate} authed={this.state.authed} />} />
            <PrivateRoute path='/dashboard' authed={this.state.authed} component={App} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default MyRouter;

