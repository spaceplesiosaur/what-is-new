import React from 'react';
import './NewsArticle.css';

const NewsArticle = props => {
  return (<section className="articleBlock" id={props.id}>
    <img className="articlePic" alt="unique" src={props.img}/>
    <h1 className="articleHeader">{props.headline}</h1>
    <p className="articleDescription">{props.description}</p>
    <a href={props.url} className="articleUrl">See more...</a>
  </section>)
}

export default NewsArticle;
