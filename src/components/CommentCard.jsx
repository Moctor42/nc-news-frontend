import React, { useState } from 'react'
import { deleteComment, formatDate } from '../../utils/utils'

export const CommentCard = ({ comment, user }) => {

    const [deleteStatus, setDeleteStatus] = useState(`Delete comment ${comment.comment_id}?`)
    const [deleted, setDeleted] = useState(false)

    const handleDelete = (event, id) => {
        event.target.disabled = "true"
        setDeleteStatus(`deleting comment ${id}!`)
        deleteComment(id)
        .then(() => setDeleted(true))
        .catch(err => {
            console.log(err)
            event.target.disabled = "false"
            setDeleteStatus("try again...")
        })
    }

    if (deleted) return (<li className="comment" key={comment.comment_id}><h4>comment was deleted!</h4></li>)

    return (
        <li className="comment" key={comment.comment_id}>
            <h3>{comment.author}</h3>
            <h5>{formatDate(comment.created_at)}</h5>
            <p>{comment.body}</p>
            <div className="comment-stats">
                <h4>{comment.votes} kudos</h4>
                {user === comment.author ? (
                    <button className="comment-button" onClick={(event)=> handleDelete(event, comment.comment_id)}>
                        {' '}
                        {deleteStatus}{' '}
                    </button>
                ) : (
                    <button> like! </button>
                )}
            </div>
        </li>
    )
}
