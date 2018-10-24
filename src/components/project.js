import React from 'react';
import './styles/float-grid.css';
import './styles/project.css';

export default function Project(props) {
    
  return (
    <div id="pj" className="row project">
      <img className="col-3" src={props.project.screenshot} alt={props.project.alt}></img>
      <div className="col-3">
        <p className="title">{props.project.title}</p>
        <p className="link">
          <a href={props.project.repo} target="_blank" rel="noopener noreferrer">Github</a>
        </p>
        <p className="link">
          <a href={props.project.liveLink} target="_blank" rel="noopener noreferrer">Live App</a>
        </p>
        <p className="tech">Tech Stack: {props.project.techStack}</p>
      </div>
      <p className="col-6 desc">{props.project.description}</p>
    </div>
  );
}