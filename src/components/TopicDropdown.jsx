import React, { useEffect, useState } from 'react'
import { fetchTopics } from '../../utils/utils'

export const TopicDropdown = ({ topic, setTopic }) => {
    const [fetchedTopics, setFetchedTopics] = useState()

    useEffect(() => {
        fetchTopics().then((response) => {
            setFetchedTopics(response)
        })
    }, [])

    const handleChange = (event) => {
        setTopic(event.target.value)
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
            <select className="query-dropdown" value={topic} onChange={handleChange}>
                <option value="">All Topics</option>
                {listTopics(fetchedTopics)}
            </select>
        )
}
