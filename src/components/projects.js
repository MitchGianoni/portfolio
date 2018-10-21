import React from 'react';
import Stack from './stack.js';
import './styles/projects.css';
import './styles/float-grid.css';

export default class Projects extends React.Component {
  render() {
    // Only render the log out button if we are logged in!
    return (
      <div className="projects row">
        <Stack />
        <h1 className="label col-12">PROJECTS GO HERE</h1>
        <div className="col-4">
          <h6>One</h6>
        </div>
        <div className="col-4">
          <h6>Two</h6>
        </div>
        <div className="col-4">
          <h6>Three</h6>
        </div>
      </div>
    );
  }

}