import React from 'react';
import './NewsCard.css';

const NewsCard = () => {
    return (
        <div className="feature-card">
            <div className="feature-icon-box"></div>
            <h2 className="feature-title">Example Title </h2>
            <p className="feature-description">Example description these are the first words from blog content should be in 3 lines</p>
            <p>Read More -></p>
        </div>
    );
};

export default NewsCard;
