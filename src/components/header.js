import React from 'react';
import './styles/header.css';
import './styles/float-grid.css'
import Bio from './bio';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header-bar row">
        <Bio className=""/>
      </div>
    );
  }

}