import React from "react";
import { NavLink } from "react-router-dom";


class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <h2 className="nav-title">TIMEKEEPER</h2>
        <ul className="nav-list">
          <li><NavLink className="nav-link" activeClassName="is-active" to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink className="nav-link" activeClassName="is-active" to="/calendar">Calendar</NavLink></li>
          <li><NavLink className="nav-link" activeClassName="is-active" to="/employees">Employees</NavLink></li>
          <li><NavLink className="nav-link" activeClassName="is-active" to="/help">Help Center</NavLink></li>
          <li><NavLink className="nav-link" activeClassName="is-active" to="/settings">Settings</NavLink></li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;