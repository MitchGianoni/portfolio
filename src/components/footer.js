import React from 'react';
import './styles/footer.css';
import "./styles/float-grid.css";
import Resume from '../images/Mitch_Gianoni_Resume.pdf'

export default class Footer extends React.Component {
  render() {
    // Only render the log out button if we are logged in!
    return (
      <section id="footer" className="row">
        <h1 className="col-12">Contact Info</h1>
        <section className="social col-3">
          <p><a href="mailto:mitchgianoni@gmail.com">
          Email
          </a></p>
        </section>
        <section className="social col-3">
          <p><a href="https://github.com/MitchGianoni" target="_blank" rel="noopener noreferrer">
          GitHub
          </a></p>
        </section>
        <section className="social col-3">
          <p><a href="https://www.linkedin.com/in/mitch-gianoni/" target="_blank" rel="noopener noreferrer">
          LinkedIn
          </a></p>
        </section>
        <section className="social col-3">
          <p><a href={Resume} target="_blank" rel="noopener noreferrer">
          Resume
          </a></p>
        </section>
      </section>
    );
  }

}