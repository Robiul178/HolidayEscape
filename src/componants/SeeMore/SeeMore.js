import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SeeMore = () => {
    const service = useLoaderData();
    const { title, description, image } = service;

    return (
        <div>
            <img src={image} alt="" />
            <h2 className='text-2xl font-semibold p-4'>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default SeeMore;