import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import DisplayService from './DisplayService/DisplayService';
import './Service.css'

const Service = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://assignment11-server-robiul178.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div>
            <Helmet>
                <title>HolidayEscape-Service</title>
            </Helmet>
            <div className='grid grid-cols-3 gap-4'>
                {
                    services.map(service => <DisplayService
                        service={service}
                        key={service.id}
                    ></DisplayService>)
                }
            </div>




        </div>
    );
};

export default Service;