import React from "react";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="grid-three-cols">
        <div className="panel">
          <h2 className="title">What would you like to do today?</h2>
        </div>
        <div className="panel">
          <h2 className="title">Upcoming Vacation</h2>
        </div>
        <div className="panel">
          <h2 className="title">Vacation Renews</h2>
        </div>
        <div className="panel panel--two-height">
          <h2 className="title">Balance</h2>
        </div>
        <div className="panel panel--two-width">
          <h2 className="title">Notifications</h2>
        </div>
        <div className="panel panel--two-width">
          <h2 className="title">Something else</h2>
        </div>
      </div>
    )
  }
}

export default Dashboard;