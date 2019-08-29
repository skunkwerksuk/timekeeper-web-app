import React from "react";

class InfoBar extends React.Component {
  render() {
    return (
      <div className="info-bar">
        <div className="notifications">
          Notifications
        </div>
        <div className="user-info">
          John Doe
        </div>
      </div>
    )
  }
}

export default InfoBar;