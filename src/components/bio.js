import React from 'react';
import "./styles/bio.css";

export default class Bio extends React.Component {
  render() {
    // Only render the log out button if we are logged in!
    return (
      <div className="bio">
        <h1>HI MY NAME IS</h1>
      </div>
    );
  }

}