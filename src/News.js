import React from 'react';
import './News.css';


 function News({news}) {
  return (
    <div className='news-card'>
      <img  className='news-img' src={news.urlToImage} alt={news.title} onClick={()=>window.open(news.url)}/>
      <h2 className='news-title' onClick={()=>window.open(news.url)} style={{cursor:"pointer"}}>{news.title}</h2>
      <p>{news.description}</p>
      <button className='readmore-btn' onClick={()=>window.open(news.url)}>Read More</button>
    </div>
  )
}
export default News;