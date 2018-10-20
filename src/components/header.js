import React from 'react';
import './styles/header.css';

export default class Header extends React.Component {
  render() {
    // Only render the log out button if we are logged in!
    return (
      <div className="header-bar">
        <h1>MITCH GIANONI</h1>
        <p>Full Stack Web Developer</p>
      </div>
    );
  }

}