import React from 'react';
import './styles/footer.css';
import "./styles/float-grid.css";

export default class Footer extends React.Component {
  render() {
    // Only render the log out button if we are logged in!
    return (
      <div className="footer">
        <h1>MITCH GIANONI</h1>
        <div className="col-3">
          <h6><a href="mailto:mitchgianoni@gmail.com" target="_blank">Email</a></h6>
        </div>
        <div className="col-3">
          <h6><a href="https://github.com/MitchGianoni" target="_blank">GitHub</a></h6>
        </div>
        <div className="col-3">
          <h6><a href="https://www.linkedin.com/in/mitch-gianoni/" target="_blank">LinkedIn</a></h6>
        </div>
        <div className="col-3">
          <h6>Resume</h6>
        </div>
      </div>
    );
  }

}