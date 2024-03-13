import React, { useEffect, useState } from 'react'
import { fetchComments, formatDate } from '../../utils/utils'
import { PostComment } from './PostComment'

export const Comments = ({ article_id, user }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [fetchedComments, setFetchedComments] = useState([])
    const [newComment, setNewComment] = useState()
    const [fakeComments, setFakeComments] = useState([])
    useEffect(() => {
        fetchComments(article_id).then((response) => {
            setTimeout(() => {
                setFetchedComments(response)
                setIsLoading(false)
            }, 600)
        })
    }, [])

    useEffect(() => {
        if (newComment && fakeComments) setFakeComments([newComment, ...fakeComments])
        else if (newComment) setFakeComments([newComment])
    }, [newComment])

    const listComments = (fetchedComments) => {
        if (!fetchedComments) setIsLoading(true)
        return fetchedComments.map((comment) => (
            <li className="comment" key={comment.comment_id}>
                <h3>{comment.author}</h3>
                <h5>{formatDate(comment.created_at)}</h5>
                <p>{comment.body}</p> <h3>{comment.votes} kudos</h3>
            </li>
        ))
    }

    return (
        <div className="comment-section">
            {user !== 'guest' ? (
                <PostComment article_id={article_id} user={user} setNewComment={setNewComment} />
            ) : (
                <p>you must be logged in to comment</p>
            )}

            {isLoading ? (
                <h1 className="loading"> Loading Comments... </h1>
            ) : (
                <ul className="comments">
                    {!fakeComments ? <></> : listComments(fakeComments)}
                    {listComments(fetchedComments)}
                </ul>
            )}
        </div>
    )
}
