import React from 'react';
import { useState } from 'react';

const AddService = () => {
    const [service, setService] = useState([]);

    const handleAddService = event => {
        event.preventDefault();

        console.log(service)
        fetch('https://assignment11-server-robiul178.vercel.app/service', {
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
            <div className='text-center mt-10'>
                <form onSubmit={handleAddService}>
                    <input type="text" onBlur={handleInputBlur} placeholder="Service Name!" name="name" className="input input-bordered input-secondary w-full max-w-xs" />
                    <br /> <br />
                    <input type="text" onBlur={handleInputBlur} placeholder="Service description! more than 100 word" name="description" className="input input-bordered input-secondary w-full max-w-xs" />
                    <br /> <br />
                    <input type="text" onBlur={handleInputBlur} placeholder="Your Service photoURL!" name="photoURL" className="input input-bordered input-secondary w-full max-w-xs" />
                    <br /> <br />
                    <button className='btn btn-success' type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;