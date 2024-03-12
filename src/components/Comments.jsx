import React, { useEffect, useState } from 'react'
import { fetchComments, formatDate } from '../../utils/utils'


export const Comments = ({ article_id }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [fetchedComments, setFetchedComments] = useState([])

    useEffect(() => {
        fetchComments(article_id)
            .then((response) => {
                setTimeout(() => {
                    setFetchedComments(response)
                    setIsLoading(false)
                }, 600)
            })
    }, [])

    const listComments = (fetchedComments) => {
        if (!fetchedComments) setIsLoading(true)
        return fetchedComments.map((comment) => (
            <div className="comment" key={comment.comment_id}>
                <>
                    <h3>{comment.author}</h3>

                    <h5>{formatDate(comment.created_at)}</h5>
                </>
                <p>{comment.body}</p> <h3>{comment.votes} kudos</h3>
            </div>
        ))
    }

    return (
        <div>{isLoading ? <h1 className="loading"> Loading Comments... </h1> : <ul>{listComments(fetchedComments)}</ul>}</div>
    )
}
