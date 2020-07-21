import React, { useState } from 'react';
import './NewsCard.css';

const NewsCard = (props) => {
    const data = props;

    console.log(data)
    return (
      // <div className="news-card" >
      //     <h2 className="news-title">{data.data.title} </h2>
      //     <p className="news-description">{data.data.description}</p>
      //     <a href={data.data.url} alt='example title'>Read More -></a>
      //     <img src={data.data.image} alt='article-img'></img>
      // </div>
      <div className='news-card'>
        <h2 className='news-title'>Article Title </h2>
        <p className='news-description'>Article Description</p>
        <a href={data.data.url} alt='example title'>
          Read More ->
        </a>
        <img src={data.data.image} alt='article-img'></img>
      </div>
    );
};

export default NewsCard;