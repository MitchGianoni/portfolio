import React from 'react';
import './styles/bio.css';
import './styles/float-grid.css'

export default class Bio extends React.Component {
  render() {
    return (
      <section className="bio">
        <h1 className="col-12 name">Hi, I'm Mitch Gianoni.</h1>
        <p className="col-12 blurb">A full stack developer with a passion for problem solving. I love
        the unique challenges that come with writing intelligent <code>{'<'}code/></code> and
        building different web apps with three-tier architecture. I also have experience in project management in both commercial
        construction and financial institution web tech.</p>
        <p className="col-12 blurb">I'm looking for an opportunity to join a team of great programmers in the Atlanta area. 
        Along with coding, I am an avid dog lover, a part time gamer, and a big hockey fan. 
        I also play in a local amateur ice hockey league.</p>
      </section>
    );
  }

}