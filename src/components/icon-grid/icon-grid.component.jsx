import React from 'react'

import './icon-grid.component.scss';

export const IconGrid = ({ icon, title, description, width, height }) => {
  return (
    <div className="grid-child">
      <img className="grid-child-logo" src={icon} alt="logo" width={width} height={height} />
      <h2 className="grid-child-h2">{title}</h2>
      <p className="grid-child-p">{description}</p>
    </div>
  );
};