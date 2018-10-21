import React from 'react';
import Stack from './stack.js';
import Project from './project.js';
import './styles/portfolio.css';
import './styles/float-grid.css';

export default class Portfolio extends React.Component {
  render() {
    return (
      <div className="portfolio">
        <div className="row">
          <h1 className="label col-12">Portfolio Projects</h1>
        </div>
        <div className="row">
          <Project text="Deckbuilder" />
          <Project text="Data Science" />
          <Project text="Go Outside!" />
          <Project text="Hockey Doctor" />
        </div>
      </div>
    );
  }

}