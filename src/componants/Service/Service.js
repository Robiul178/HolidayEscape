import React, { useEffect, useState } from 'react';
import DisplayService from './DisplayService/DisplayService';

const Service = () => {
    const [services, setServices] = useState([]);
    console.log('From service page', services)

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <div>
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