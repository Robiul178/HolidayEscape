import React from 'react';
import { useState } from 'react';

const Review = () => {

    const [user, setUser] = useState([]);

    const handleAddReview = event => {
        event.preventDefault();

        fetch('https://assignment11-server-robiul178.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(req => req.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Your Review send successfull')
                }
            })
        event.target.reset()
    }

    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...user };
        newUser[field] = value;
        setUser(newUser);
    }

    return (
        <div>
            <div>
                <p className='text-xl font-bold'>
                    Your Review
                </p>
                <form onSubmit={handleAddReview}>
                    <input className='border rounded-md' onBlur={handleInputBlur} type="text" name="name" placeholder='Your Name!' />
                    <br />
                    <input className='border rounded-md' onBlur={handleInputBlur} type="text" name="email" placeholder='Your login email!' />
                    <br />
                    <div>
                        <label for=""></label>
                        <textarea className='border rounded-md' onBlur={handleInputBlur} class="form-control" type="text" placeholder='Write here!' name="textarea" id="" rows="5"></textarea>
                    </div>
                    <br />
                    <button className='btn' type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Review;