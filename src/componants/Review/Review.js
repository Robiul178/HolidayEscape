import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Review = () => {


    const [users, setUser] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUser(data))
    });

    const handleAddUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = { name, email }
        // console.log(user);
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(req => req.json())
            .then(data => {
                // console.log(data);
                const newUsers = [...users, data];
                setUser(newUsers);
            })
        event.target.reset()
    }

    return (
        <div>
            <h2>For Review</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" placeholder='name' />
                <br />
                <input type="email" name="email" id="" placeholder='email' />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Review;