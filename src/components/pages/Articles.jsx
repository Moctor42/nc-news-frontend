import React, { useEffect, useState } from 'react'
import { Card } from '../Card'
import { Link, useSearchParams } from 'react-router-dom'
import { fetchArticles } from '../../../utils/utils'
import { TopicDropdown } from '../TopicDropdown'
import { SortDropdown } from '../SortDropdown'

export const Articles = () => {
    const [fetchedArticles, setFetchedArticles] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [isSuccessful, setIsSuccessful] = useState(false)

    const [searchParams, setSearchParams] = useSearchParams()

    const topicQuery = searchParams.get('topic')
    const sortQuery = searchParams.get('sort_by') //
    const orderQuery = searchParams.get('order') // asc / desc

    const [topic, setTopic] = useState('' || topicQuery)
    const [sort, setSort] = useState('' || sortQuery)
    const [order, setOrder] = useState('' || orderQuery)

    useEffect(()=>{
        const newParams = new URLSearchParams(searchParams)
        topic ? newParams.set("topic", topic) : newParams.delete("topic")
        sort ? newParams.set("sort_by", sort) : newParams.delete("sort_by")
        order ? newParams.set("order", order) : newParams.delete("order")
        setSearchParams(newParams)
        console.log(searchParams);

    },[topic, sort, order])

    useEffect(() => {
        setIsLoading(true)
        setIsSuccessful(false)

        let query = '?'
        if (sortQuery) query += `&sort_by=${sortQuery}`
        if (topicQuery) query += `&topic=${topicQuery}`
        if (orderQuery) query += `&order=${orderQuery}`

        console.log(query)

        fetchArticles(query)
            .then((response) => {
                setTimeout(() => {
                    setFetchedArticles(response)
                    setIsSuccessful(true)
                    setIsLoading(false)
                }, 1000)
            })
            .catch((err) => {
                setIsLoading(false)
                console.log(err.response.data)
            })
    }, [topicQuery, sortQuery, orderQuery])

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
            <h2>Articles</h2>
            <div className="filters">
                <TopicDropdown topic={topic} setTopic={setTopic} />
                <SortDropdown sort={sort} setSort={setSort} order={order} setOrder={setOrder} />
            </div>

            {isLoading ? (
                <h2 className="loading">loading...</h2>
            ) : isSuccessful ? (
                <div className="scrollcontainer">
                    <ul> {makeList(fetchedArticles)} </ul>
                </div>
            ) : (
                <p> bad query :( </p>
            )}
        </div>
    )
}
