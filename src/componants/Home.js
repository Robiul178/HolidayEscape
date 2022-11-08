import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './CSS/Home.css'

const Home = () => {
    const service = useLoaderData();
    console.log('from home', service)
    return (
        <div>
            <h1 className='text-4xl font-semibold text-center'>Our Service</h1>

        </div >
    );
};

export default Home;