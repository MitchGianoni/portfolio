import React from 'react';
import './styles/footer.css';
import "./styles/float-grid.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as brandIcons from '@fortawesome/free-brands-svg-icons';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import Resume from '../images/Mitch_Gianoni_Resume.pdf';

export default class Footer extends React.Component {
  render() {
    return (
      <section id="footer" className="row">
        <section className="social col-12">
            <a href="mailto:mitchgianoni@gmail.com">
              <FontAwesomeIcon icon={solidIcons.faEnvelope} className="icon" alt="Email" title="Email" />
            </a>
            <a href="https://github.com/MitchGianoni" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={brandIcons.faGithub} className="icon" alt="GitHub" title="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/mitch-gianoni/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={brandIcons.faLinkedin} className="icon" alt="LinkedIn" title="LinkedIn" />
            </a>
            <a href={Resume} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={solidIcons.faFile} className="icon" alt="Resume" title="Resume" />
            </a>
        </section>
      </section>
    );
  }

}