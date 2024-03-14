import React, { useEffect, useState } from 'react'
import { fetchTopics } from '../../utils/utils'

export const TopicDropdown = ({ searchParams, setSearchParams, topicQuery }) => {
    const [fetchedTopics, setFetchedTopics] = useState()
    const [topic, setTopic] = useState(topicQuery)

    useEffect(() => {
        fetchTopics().then((response) => {
            setTopic(topicQuery)
            setFetchedTopics(response)
        })
    }, [])

    const handleChange = (event) => {
        setTopic(event.target.value)
        searchParams.set('topic', event.target.value)
        setSearchParams(searchParams)
    }

    const listTopics = (topics) => {
        return topics.map((topic) => (
            <option key={topic.slug} value={topic.slug}>
                {' '}
                {topic.slug}{' '}
            </option>
        ))
    }

    if (fetchedTopics)
        return (
            <select className="topic-dropdown" value={topic} onChange={handleChange}>
                <option value="">All Topics</option>
                {listTopics(fetchedTopics)}
            </select>
        )
}
