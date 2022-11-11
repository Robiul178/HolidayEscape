import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../Context/UseContext';
import DisplayMyReview from './DisplayMyReview';
const MyReview = () => {


    const { user } = useContext(AuthContext)
    const [myReview, setMyReview] = useState({});


    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyReview(data)
                console.log('from my review', data)
            });
    }, [user?.email]);




    return (
        <div>
            <h2>Your review:{myReview.length}</h2>
            <div>
                {
                    myReview.map(review => <DisplayMyReview
                        review={review}
                        key={review._id}
                    ></DisplayMyReview>)
                }
            </div>
        </div>
    );
};

export default MyReview;