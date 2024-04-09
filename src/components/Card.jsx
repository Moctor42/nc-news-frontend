import React from 'react';
import { formatDate } from '../../utils/utils';

export const Card = ({info}) => {

    return (
        <div className='card'>
            <div>
                <h4> {info.title} </h4>
                <p>Votes: {info.votes}</p>
                <p>posted in {info.topic} by {info.author}<br/>
                {info.comment_count} comments<br/>
                {formatDate(info.created_at)}</p>
            </div>
            
            <img className='card-image' src={info.article_img_url} />
        </div>
    );
};
