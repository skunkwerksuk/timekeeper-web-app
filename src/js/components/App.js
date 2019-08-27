import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";

import Login from './Login';
import PrivateRoute from './PrivateRoute';

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authed: false
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
      <Router>
        <div>
          {/* <nav>
            <ul>
              <li><Link to="/public">public</Link></li>
              <li><Link to="/protected">protected</Link></li>
              <li><Link to="/login">login</Link></li>
            </ul>
          </nav> */}
          {/* <div>
            {this.state.authed ? 'LOGGED IN' : 'LOGGED OUT'}
            <button onClick={this.unauthenticate}>logout</button>
          </div> */}
          <Route path="/" exact render={(props) => <Login {...props} authenticate={this.authenticate} authed={this.state.authed} />} />
          <Route path="/public" exact component={Public} />
          <Route path="/login" render={(props) => <Login {...props} authenticate={this.authenticate} authed={this.state.authed} />} />
          <PrivateRoute path='/protected' authed={this.state.authed} component={Protected} />
        </div>
      </Router>
    );
  }
}
export default App;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;