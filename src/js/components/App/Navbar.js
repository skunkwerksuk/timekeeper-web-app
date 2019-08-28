import React from "react";
import { Link } from "react-router-dom";


class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <h2 className="nav-title">TIMEKEEPER</h2>
        <ul className="nav-list">
          <li><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
          <li><Link className="nav-link" to="/calendar">Calendar</Link></li>
          <li><Link className="nav-link" to="/employees">Employees</Link></li>
          <li><Link className="nav-link" to="/help">Help Center</Link></li>
          <li><Link className="nav-link" to="/settings">Settings</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;