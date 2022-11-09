import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import DisplayService from './DisplayService/DisplayService';
import './Service.css'

const Service = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div>
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