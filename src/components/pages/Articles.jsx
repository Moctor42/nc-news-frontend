import React, { useEffect, useState } from 'react';
import { Card } from '../Card';
import { Link } from 'react-router-dom';
import { fetchArticles } from '../../../utils/utils';

export const Articles = () => {
    const [fetchedArticles, setFetchedArticles] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        fetchArticles()
        .then((response)=>{
            setTimeout(()=>{
                setFetchedArticles(response)
                setIsLoading(false)
            }, 1000)
            
        })
    }, [])

    const makeList = (fetchedData)=>{
        if(!fetchedData) setIsLoading(true)
        return fetchedData.map((cardInfo)=>
        <Link to={`/articles/${cardInfo.article_id}`} key={cardInfo.article_id}> 
            <li> <Card info={cardInfo}/> </li>
        </Link>
        )
    }

    return (
        <div className='page page-style'>
            <h2>Articles</h2>
            {isLoading ? 
            <h2 className='loading'>loading...</h2> : 
                <div className='scrollcontainer'>
                    <ul> {makeList(fetchedArticles)} </ul>
                </div>
                }
            
        </div>
    );
};