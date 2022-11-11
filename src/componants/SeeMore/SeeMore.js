import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './SeeMore.css';
import DisplayReview from '../Review/DisplayReview'

const SeeMore = () => {
    const service = useLoaderData();

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://assignment11-server-robiul178.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])




    const { title, description, image } = service;

    return (
        <div className='seemore-container'>
            <div>
                <img src={image} alt="" />
                <h2 className='text-2xl font-semibold p-4'>{title}</h2>
                <p>{description}</p>
            </div>
            <div>
                <div>
                    {
                        reviews.map(review => <DisplayReview
                            key={review._id}
                            review={review}
                        ></DisplayReview>)
                    }

                </div>
                <Link to={`/review`}>
                    <button className="btn btn-outline btn-success">Added Your Review</button>
                </Link>
            </div>
        </div>
    );
};

export default SeeMore;