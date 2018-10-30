import React from 'react';
import './styles/header.css';
import './styles/float-grid.css'
import Bio from './bio';

export default class Header extends React.Component {
  render() {
    return (
      <section className="header-bar row">
        <section className="circular-landscape">
          <img src="https://s3.us-east-2.amazonaws.com/mg-icons/Mitch.jpg" className="avatar" alt="avatar" title="Avatar"></img>
        </section>
        <Bio className=""/>
      </section>
    );
  }

}