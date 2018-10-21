import React from 'react';
import './styles/bio.css';
import './styles/float-grid.css'

export default class Bio extends React.Component {
  render() {
    // Only render the log out button if we are logged in!
    return (
      <div className="bio">
        <h1 className="col-12 name">Hi, I'm Mitch Gianoni.</h1>
        <p className="col-12 blurb">A full stack developer with a passion for problem solving. I love
        the unique challenges that come with writing intelligent <code>{'<'}code/></code> and building different web apps.
        Along with coding, I am an avid dog lover, a big hockey fan and play in an adult league here in Atlanta. I also
        enjoy going to concerts and video games.</p>
      </div>
    );
  }

}