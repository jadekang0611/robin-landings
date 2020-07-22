import React from 'react';
import './FeatureCard.css';

const FeatureCard = (props) => {
  return (
    <div className='feature-card'>
      <div className='feature-icon-box'></div>
      <h2 className='feature-title'>{props.title}</h2>
      <p className='feature-description'>{props.sub}</p>
    </div>
  );
};

export default FeatureCard;
