import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import DisplayAddedService from '../../componants/Service/AddService/DisplayAddedService';
import Banner from '../Banner/Banner';
import About from './About/About';
import HomeService from './HomeService/HomeService';

const Home = () => {
    const [services, setServices] = useState([]);

    const [addServices, setAddServices] = useState([]);
    // console.log(addServices)

    useEffect(() => {
        fetch('https://assignment11-server-robiul178.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);



    useEffect(() => {
        fetch('https://assignment11-server-robiul178.vercel.app/service')
            .then(res => res.json())
            .then(data => setAddServices(data))
    }, [])



    return (
        <div>
            <Helmet>
                <title>HolidayEscape-Home</title>
            </Helmet>
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
                <div className='grid grid-cols-3 gap-4'>
                    {
                        addServices.map(addService => <DisplayAddedService
                            addService={addService}
                        ></DisplayAddedService>)
                    }
                </div>
                <Link className="btn btn-ghost pt-2 normal-case text-xl" to="/services/:id">See More</Link>
            </div>
            <div>
                <About></About>
            </div>
        </div>
    );
};

export default Home;