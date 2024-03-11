import React, { useEffect, useState } from 'react';
import { Card } from '../Card';
import { Link } from 'react-router-dom';

export const Articles = () => {
    const [fetchedArticles, setFetchedArticles] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        fetch("https://nc-news-8n39.onrender.com/api/articles")
        .then((response)=>response.json())
        .then((body)=>{
            setTimeout(()=>{
                setFetchedArticles(body.articles)
                setIsLoading(false)
            }, 1000)
            
        })
    }, [])

    const testData = ["1", "2", "3", "4", "5"]

    const makeList = (fetchedData)=>{
        if(!fetchedData) setIsLoading(true)
        return fetchedData.map((cardInfo)=>
        <Link to={`/articles/${cardInfo.article_id}`}> 
            <li> <Card info={cardInfo}/> </li>
        </Link>
        )
    }

    return (
        <div className='page'>
            <h2>Articles</h2>
            {isLoading ? 
            <h2 className='loading'>loading...</h2> : 
            <ul> {makeList(fetchedArticles)} </ul>}
            
        </div>
    );
};