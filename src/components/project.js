import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as brandIcons from '@fortawesome/free-brands-svg-icons';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import './styles/float-grid.css';
import './styles/project.css';

export default function Project(props) {
    
  return (
    <section id="pj" className="row project">
      <p className="col-3 invis">_</p>
      <p className="col-6 title">{props.project.title}</p>
      <p className="col-3 invis">_</p>
      <a href={props.project.liveLink} title="Live Site" alt="Live Site">
        <img className="col-12" src={props.project.screenshot} alt={props.project.alt} target="_blank" rel="noopener noreferrer"></img>
      </a>
      <p className="col-6 desc">{props.project.description}</p>
      <section className="col-6 info">
        <p className="tech">Tech Stack: {props.project.techStack}</p>
        <section className="links">
          <a href={props.project.repo} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={brandIcons.faGithubSquare} className="icon" alt="GitHub Repo" title="GitHub Repo" />
          </a>
          <a href={props.project.liveLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={solidIcons.faCity} className="icon" alt="Live Site" title="Live Site" />
          </a>
        </section>
      </section>
    </section>
  );
}