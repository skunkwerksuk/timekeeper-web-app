import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from "react-router-dom";

import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Calendar from './Calendar';
import Employees from './Employees';
import HelpCenter from './HelpCenter';
import Settings from './Settings';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authed: false
    }
  }
  render () {
    return (
      <Router basename="/">
        <div className="row">
          <div className="nav-width">
            <Navbar />
          </div>
          <div className="nav-body">
            <Switch>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/calendar" component={Calendar} />
              <Route path="/employees" component={Employees} />
              <Route path="/help" component={HelpCenter} />
              <Route path="/settings" component={Settings} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;

