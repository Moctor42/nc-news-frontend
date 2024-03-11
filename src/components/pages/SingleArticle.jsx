import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const SingleArticle = () => {
    const { article_id } = useParams()
    const [article, setArticle] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`https://nc-news-8n39.onrender.com/api/articles/${article_id}`)
            .then((response) => response.json())
            .then((body) => {
                setArticle(body.article)
                setIsLoading(false)
            })
    })
    return (
        <div className="page">
            {isLoading ? <h2 className='loading'>loading...</h2> : 
                <article>
                    <h2>{article.title}</h2>
                    <p> posted in {article.topic} by {article.author} </p>
                    <p className='body'>{article.body}</p>
                    <p style={{fontWeight: "bold"}} > Votes: {article.votes} Comments: {article.comment_count} </p>
                </article>
            }
        </div>
    )
}
