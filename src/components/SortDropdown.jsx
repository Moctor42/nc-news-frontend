import React, { useState } from 'react'

export const SortDropdown = ({ sort, setSort, order, setOrder }) => {
    const handleChange = (event) => {
        setSort(event.target.value)
    }

    const handleClick = () => {
        order === 'asc' ? setOrder('desc') : setOrder('asc')
    }

    return (
        <div style={{ display: 'flex' }}>
            <label htmlFor="sort">
                {' '}
                Sort Articles
                <select id="sort" className="query-dropdown" value={sort} onChange={handleChange}>
                    <option value=""></option>
                    <option value="created_at">Date</option>
                    <option value="votes">Votes</option>
                    <option value="comment_count">Comments</option>
                </select>
            </label>
            <button value={order} onClick={handleClick}>
                {order || 'desc'}
            </button>
        </div>
    )
}
