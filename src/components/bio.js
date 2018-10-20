import React from 'react';
import "./styles/bio.css";

export default class Bio extends React.Component {
  render() {
    // Only render the log out button if we are logged in!
    return (
      <div className="bio">
        <p>HI MY NAME IS</p>
      </div>
    );
  }

}