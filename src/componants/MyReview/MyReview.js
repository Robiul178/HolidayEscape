import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../Context/UseContext';
import DisplayMyReview from './DisplayMyReview';
const MyReview = () => {


    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([]);
    // console.log(myReview)


    useEffect(() => {
        fetch(`https://assignment11-server-robiul178.vercel.app/reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                console.log('from my review', data)
            });
    }, [user?.email]);




    return (
        <div>

            {
                reviews.map(review => <DisplayMyReview
                    review={review}
                    key={review._id}
                ></DisplayMyReview>)
            }

        </div>
    );
};

export default MyReview;