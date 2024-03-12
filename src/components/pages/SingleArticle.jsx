import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Comments } from '../Comments'
import { fetchSingleArticle, formatDate } from '../../../utils/utils'

export const SingleArticle = () => {
    const { article_id } = useParams()
    const [article, setArticle] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchSingleArticle(article_id)
        .then((response) => {
            setArticle(response)
            setIsLoading(false)
        })
    }, [])

    return (
        <div className="page">
            {isLoading ? <h2 className='loading'>loading...</h2> : 
                <article>
                    <h2>{article.title}</h2>
                    <p> posted in {article.topic} by {article.author} on {formatDate(article.created_at)}</p>
                    <p className='body'>{article.body}</p>
                    <p style={{fontWeight: "bold"}} > Votes: {article.votes} Comments: {article.comment_count} </p>
                </article>
            }
            <Comments article_id={article_id}/>
        </div>
    )
}
