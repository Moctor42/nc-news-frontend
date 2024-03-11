import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <nav className='navigation'>
            <Link to="/"> <button className='navbutton'>Home</button> </Link>
            <Link to="/articles"> <button className='navbutton'>Articles</button> </Link>
        </nav>
    );
};
