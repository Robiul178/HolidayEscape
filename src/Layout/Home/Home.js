import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import HomeService from './HomeService/HomeService';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://assignment11-server-robiul178.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);



    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
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
                <Link className="btn btn-ghost normal-case text-xl" to="/services/:id">See More</Link>
            </div>
        </div>
    );
};

export default Home;