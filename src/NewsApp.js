import React, { useEffect, useRef, useState } from 'react'
import News from "./News";
import './NewsApp.css';
 function NewsApp() {
    const Apikey="1fcab9841c43494da72a211f33b47761";
    const [newsList,setNewsList]=useState([]);
    const [query, setquery]=useState('tesla');
    const queryinputRef=useRef(null);
    const India="India";
    const USA="USA";
    const FIFA="FIFA";
    const Russia="Russia";
    const Iphone="Iphone";
    const stock="stock";
    const Health="Health";
    const BMW="BMW";

  const Apiurl=`https://newsapi.org/v2/everything?q=${query}&from=2023-08-9&sortBy=publishedAt&apiKey=${Apikey}`;

    useEffect(()=> {
     fetchData();
      console.log("fetch hua");
    },[query,India,USA,FIFA,Russia,Iphone,stock,Health,BMW]);

  
    async function fetchData(){
        try{
            const responce=await fetch(Apiurl);
            const jsonData=await responce.json();
            setNewsList(jsonData.articles);
            console.log("yaha pr bhe fetch hua");
        }
        catch(e){
            console.log(e, "error occured");
        }
    }

    function handleSubmit(event){
      event.preventDefault();
    const queryvalue=queryinputRef.current.value;
     setquery(queryvalue);
    }
      function handleRefresh(){
      window.location.reload();
    };


    function India_news(event){
      event.preventDefault();
      setquery(India);   
    }

    function USA_news(event){
      event.preventDefault();
      setquery(USA);   
    }
    function FIFA_news(event){
      event.preventDefault();
      setquery(FIFA); 
  
    }
    function Russia_news(event){
      event.preventDefault();
      setquery(Russia);   
    }
    function Iphone_news(event){
      event.preventDefault();
      setquery(Iphone);   
    }
    function Stock_news(event){
      event.preventDefault();
      setquery(stock);   
    }
    function Health_news(event){
      event.preventDefault();
      setquery(Health);   
    }

    function BMW_news(event){
      event.preventDefault();
      setquery(BMW);   
    }
  
  return (
    <div className='news-app'>
      <div className='hadding'>
      <h1 className='hadding-tag' onClick={handleRefresh}>Everyday News</h1>
      </div>  
      
      <form className='query-search-form' onSubmit={handleSubmit}>
        <input className='query-btn'  type="text" ref={queryinputRef}/>
        <button className='submit-btn' onClick={handleSubmit} type="submit" value="submit">Search</button>
      </form>
      <section className='slected-news'>
           <ul className='selcted-news-list'>
            <li className='list-items'onClick={India_news}>INDIA</li>
            <li className='list-items' onClick={USA_news}>USA</li>
            <li className='list-items' onClick={FIFA_news}>FIFA</li>
            <li className='list-items' onClick={Russia_news}>Russia</li>
            <li className='list-items'onClick={Iphone_news}>Iphone</li>
            <li className='list-items' onClick={Stock_news}>Stock</li>
            <li className='list-items'onClick={Health_news}>Health</li>
            <li className='list-items'onClick={BMW_news}>BMW</li>
           </ul>
      </section>
    <div className='news-data'
    style={{display: 'grid', gridTemplateColumns:'repeat(3, 30%)', justifyContent:'space-between', rowGap:'20px'}}>
     {newsList.map(news =>{
        return <News key={news.url} news={news}/>
     })}
    </div>
    </div>
  );
 }

export default NewsApp;