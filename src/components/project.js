import React from 'react';
import './styles/float-grid.css';
import './styles/project.css';

export default function Project(props) {
    
  return (
    <div className="col-12 project">
      <h1 className="title">{props.text}</h1>
    </div>
  );
}