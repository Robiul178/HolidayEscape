import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';

const SeeMore = () => {
    const service = useLoaderData();
    const { title, description, image } = service;

    return (
        <div>
            <div>
                <img src={image} alt="" />
                <h2 className='text-2xl font-semibold p-4'>{title}</h2>
                <p>{description}</p>
            </div>
            <div>
                <Review></Review>
            </div>
        </div>
    );
};

export default SeeMore;