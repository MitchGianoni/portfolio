import React from 'react';
import './styles/float-grid.css';
import './styles/project.css';

export default function Project(props) {
    
  return (
    <div className="col-6">
      <h1>{props.text}</h1>
    </div>
  );
}