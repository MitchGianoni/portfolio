import React from 'react';
import './styles/footer.css';
import "./styles/float-grid.css";
import Resume from '../images/Mitch_Gianoni_Resume.pdf'

export default class Footer extends React.Component {
  render() {
    // Only render the log out button if we are logged in!
    return (
      <div className="footer">
        <div className="col-3">
          <h6><a href="mailto:mitchgianoni@gmail.com">Email</a></h6>
        </div>
        <div className="col-3">
          <h6><a href="https://github.com/MitchGianoni" target="_blank">GitHub</a></h6>
        </div>
        <div className="col-3">
          <h6><a href="https://www.linkedin.com/in/mitch-gianoni/" target="_blank">LinkedIn</a></h6>
        </div>
        <div className="col-3">
          <h6><a href={Resume} target="_blank">Resume</a></h6>
        </div>
      </div>
    );
  }

}