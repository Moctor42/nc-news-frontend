import React from 'react';

export const Card = ({info}) => {

    return (
        <div className='card'>
            <h4> {info.title} </h4>
            <p>Votes: {info.votes}</p>
            <p>posted in {info.topic} by {info.author}<br/>
            {info.created_at}</p>
        </div>
    );
};
