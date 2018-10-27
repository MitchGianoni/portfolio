import React from 'react';
import './styles/float-grid.css';
import './styles/project.css';

export default function Project(props) {
    
  return (
    <section id="pj" className="row project">
      <p className="col-12 title">{props.project.title}</p>
      <img className="col-12" src={props.project.screenshot} alt={props.project.alt}></img>
      <p className="col-6 desc">{props.project.description}</p>
      <section className="col-6 info">
        <p className="tech">Tech Stack: {props.project.techStack}</p>
        <p className="link">
          <a href={props.project.repo} target="_blank" rel="noopener noreferrer">Github</a>
        </p>
        <p className="link">
          <a href={props.project.liveLink} target="_blank" rel="noopener noreferrer">Live App</a>
        </p>
      </section>
    </section>
  );
}