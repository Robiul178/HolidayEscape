import React from 'react';
import { useState } from 'react';

const AddService = () => {
    const [service, setService] = useState([]);

    const handleAddService = event => {
        event.preventDefault();

        console.log(service)
        fetch('http://localhost:5000/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)

        })
            .then(req => req.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Your Service add successfull')
                }
                console.log(data)
            })
        event.target.reset()
    }

    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newService = { ...service };
        newService[field] = value;
        setService(newService);
    }

    return (
        <div>
            <div>
                <form onSubmit={handleAddService}>
                    <input className='border rounded-md' onBlur={handleInputBlur} type="text" name="name" placeholder='Service Name!' />
                    <br />
                    <input className='border rounded-md' onBlur={handleInputBlur} type="text" name="description" placeholder='Service description!' />
                    <br />
                    <input className='border rounded-md' onBlur={handleInputBlur} type="text" name="photoURL" placeholder='Your Service photoURL!' />
                    <br />
                    <button className='btn' type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;