import React from 'react';
import { useState } from 'react';
// import { useEffect } from 'react';

const Review = () => {


    const [user, setUser] = useState({});

    // useEffect(() => {
    //     fetch('http://localhost:5000/users')
    //         .then(res => res.json())
    //         .then(data => setUser(data))
    // });

    const handleAddReview = event => {
        event.preventDefault();

        console.log(user)


        // const name = event.target.name.value;
        // const email = event.target.email.value;
        // const user = { name, email }
        // // console.log(user);
        // fetch('http://localhost:5000/users', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(user)

        // })
        //     .then(req => req.json())
        //     .then(data => {
        //         // console.log(data);
        //         const newUsers = [...user, data];
        //         setUser(newUsers);
        //     })
        // event.target.reset()
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
            <h2>For Review</h2>
            <form onSubmit={handleAddReview}>
                <input onBlur={handleInputBlur} type="text" name="name" placeholder='name' />
                <br />
                <div>
                    <label for=""></label>
                    <textarea onBlur={handleInputBlur} class="form-control" type="text" placeholder='Write here!' name="textarea" id="" rows="3"></textarea>
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Review;