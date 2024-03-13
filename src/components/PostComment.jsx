import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { postComment } from '../../utils/utils'

export const PostComment = ({user, setNewComment}) => {
    const { article_id } = useParams()
    const [input, setInput] = useState('')
    const [isPosting, setIsPosting] = useState(false)
    const [placeholder, setPlaceholder] = useState("Say something nice...")

    const handleSubmit = (event) => {
        event.preventDefault()
        if (input){
            setIsPosting(true)
        const body = {
            username: user,
            body: input,
        }
        postComment(article_id, body)
        .then(response => {
            setNewComment(response.data.comment)
            setPlaceholder("Post Successful!")
            setTimeout(() => {
                setInput("")
                setIsPosting(false)
            }, 1000);
        })
        .catch(error => {console.log(error)})
        } else {
            setPlaceholder("Forgetting something? :^)")
        }
        
    }

    return (
        <form onSubmit={handleSubmit} className="comment-entry">
            <textarea
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder={placeholder}
            />
            <button type="submit" disabled={isPosting} >{isPosting ? "posting!..." : "Submit Comment"}</button>
        </form>
    )
}
