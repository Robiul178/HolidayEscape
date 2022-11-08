import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import HomeService from './HomeService/HomeService';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);



    return (
        <div>
            <div>
                <h1 className='text-4xl p-12 font-semibold text-center'>Our Service</h1>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        services.map(service => <HomeService
                            service={service}
                            key={service.id}
                        ></HomeService>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;