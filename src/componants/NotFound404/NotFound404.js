import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/NotFound404.css'

const NotFound404 = () => {
    return (
        <div className=''>
            <div className='not-found text-lg'>
                <h1>Sorry</h1>
                <h3>You search wrong page.</h3>
                <Link to='/'>Click here for Back to home page</Link>
            </div>
        </div>
    );
};

export default NotFound404;