import React, { useEffect, useState } from 'react'
import { Card } from '../Card'
import { Link, useSearchParams } from 'react-router-dom'
import { fetchArticles } from '../../../utils/utils'
import { TopicDropdown } from '../TopicDropdown'

export const Articles = () => {
    const [fetchedArticles, setFetchedArticles] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [searchParams, setSearchParams] = useSearchParams()

    const topicQuery = searchParams.get('topic')

    useEffect(() => {
        setIsLoading(true)
        let query = "?"

        if (topicQuery) {
            searchParams.set('topic', topicQuery)
            setSearchParams(searchParams)
            query += `&topic=${topicQuery}`
        } else {setSearchParams()}

        fetchArticles(query).then((response) => {
            setTimeout(() => {
                setFetchedArticles(response)
                setIsLoading(false)
            }, 1000)
        })
    }, [searchParams])

    const makeList = (fetchedData) => {
        if (!fetchedData) setIsLoading(true)
        return fetchedData.map((cardInfo) => (
            <Link to={`/articles/${cardInfo.article_id}`} key={cardInfo.article_id}>
                <li>
                    {' '}
                    <Card info={cardInfo} />{' '}
                </li>
            </Link>
        ))
    }

    return (
        <div className="page page-style">
            <div>
                <h2>Articles</h2> <TopicDropdown searchParams={searchParams} setSearchParams={setSearchParams} topicQuery={topicQuery} />{' '}
            </div>
            {isLoading ? (
                <h2 className="loading">loading...</h2>
            ) : (
                <div className="scrollcontainer">
                    <ul> {makeList(fetchedArticles)} </ul>
                </div>
            )}
        </div>
    )
}
