import React from 'react';
import './styles/footer.css';
import "./styles/float-grid.css";
import Resume from '../images/Mitch_Gianoni_Resume.pdf'

export default class Footer extends React.Component {
  render() {
    // Only render the log out button if we are logged in!
    return (
      <div id="footer" className="row">
        <h5 className="col-12">Contact Info</h5>
        <div className="social col-3">
          <h5><a href="mailto:mitchgianoni@gmail.com">Email</a></h5>
        </div>
        <div className="social col-3">
          <h5><a href="https://github.com/MitchGianoni" target="_blank">GitHub</a></h5>
        </div>
        <div className="social col-3">
          <h5><a href="https://www.linkedin.com/in/mitch-gianoni/" target="_blank">LinkedIn</a></h5>
        </div>
        <div className="social col-3">
          <h5><a href={Resume} target="_blank">Resume</a></h5>
        </div>
      </div>
    );
  }

}