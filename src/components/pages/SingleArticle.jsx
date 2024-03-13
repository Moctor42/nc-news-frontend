import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Comments } from '../Comments'
import { fetchSingleArticle, formatDate, patchArticle } from '../../../utils/utils'
import { UserContext } from '../../contexts/User'

export const SingleArticle = () => {
    const { user } = useContext(UserContext)
    const { article_id } = useParams()

    const [article, setArticle] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [vote, setVote] = useState(0)
    const [voteOffset, setVoteOffset] = useState(0)

    const voteCount = Number(vote) + Number(article.votes)

    useEffect(() => {
        fetchSingleArticle(article_id).then((response) => {
            setArticle(response)
            setIsLoading(false)
        })
    }, [])

    useEffect(() => {
        patchArticle(article_id, {inc_votes: Number(voteOffset)})
        .catch((error)=>console.log(error, "vote error!"))
    }, [vote])



    const handleVote = (event) => {

        const value = Number(event.target.value)
        if (vote !== value) {
            setVoteOffset(value + (vote * -1))
            setVote(value)
        }
        if (vote === value) {
            setVoteOffset(value * -1)
            setVote(0)
        }
    }

    const setStyle = (value) => {
        if (value === Number(vote)) return { outlineWidth: '.3rem' }
    }

    return (
        <div className="article-page page-style">
            {isLoading ? (
                <h2 className="loading">loading...</h2>
            ) : (
                <article>
                    <h2>{article.title}</h2>
                    <p>
                        {' '}
                        posted in {article.topic} by {article.author} on {formatDate(article.created_at)}
                    </p>
                    <p className="body">{article.body}</p>
                    <p style={{ fontWeight: 'bold' }}>
                        {' '}
                        Votes: {voteCount} Comments: {article.comment_count}{' '}
                    </p>
                    <div className="votebuttons">
                        <button className="like" style={setStyle(1)} value={1} onClick={handleVote}>
                            I Love it!
                        </button>
                        <button className="dislike" style={setStyle(-1)} value={-1} onClick={handleVote}>
                            I Hate it!
                        </button>
                    </div>
                </article>
            )}
            <Comments article_id={article_id} user={user}/>
        </div>
    )
}
