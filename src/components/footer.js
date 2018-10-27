import React from 'react';
import './styles/footer.css';
import "./styles/float-grid.css";
import Resume from '../images/Mitch_Gianoni_Resume.pdf'

export default class Footer extends React.Component {
  render() {
    return (
      <section id="footer" className="row">
        <section className="social col-12">
          <p>
            <a href="mailto:mitchgianoni@gmail.com">Email</a>
            <a href="https://github.com/MitchGianoni" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/mitch-gianoni/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={Resume} target="_blank" rel="noopener noreferrer">Resume</a>
          </p>
        </section>
      </section>
    );
  }

}