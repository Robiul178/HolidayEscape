import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/UseContext';



const DisplayMyReview = ({ review }) => {
    const { name, textarea } = review;
    const [displayReview, setDisplayReview] = useState(review)

    const { user } = useContext(AuthContext);
    console.log(user)


    const handleDelete = review => {
        const agree = window.confirm(`Are you sure you want to delete your review`)

        if (agree) {
            fetch(`https://assignment11-server-robiul178.vercel.app/reviews/${review._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Review deleted successfully , Reload your page for magic')
                        const remainingReviews = displayReview.filter(rvw => rvw._id !== review._id)
                        setDisplayReview(remainingReviews)
                    }
                })
        }

    }

    return (
        <div>
            <div className='border-b p-4'>
                <div className='flex'>
                    <div className="w-8 rounded-sm">
                        <img src={user?.email} />
                    </div>
                    <div>
                        <h1 className='text-2x font-semibold'>{name}</h1>
                    </div>
                </div>
                <div>
                    <p >{textarea}</p>
                </div>
                <button className='btn' onClick={() => handleDelete(review)}>Delete</button>
            </div>
        </div>
    );
};

export default DisplayMyReview;