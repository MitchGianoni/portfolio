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
        building different web apps. I also have prior experience in project management in both commercial
        construction and financial institution web technology.
        I'm looking for an opportunity to join a team of great programmers in the Atlanta area. 
        Along with coding, I am an avid dog lover, a part time gamer, and a big hockey fan. 
        I also play in a local adult amateur ice hockey league.</p>
      </section>
    );
  }

}