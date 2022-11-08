import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import '../CSS/ReadMore.css';

const ReadMore = () => {
    const course = useLoaderData();
    const { description, price, title, image, student, rating, id } = course;
    return (
        <div className='rm-container'>
            <div>
                <img className='mt-16' src={image} alt="" />
                <div className="flex mt-6 justify-around">
                    <p className='shadow-2xl p-3'>Price:{price}</p>
                    <p className='shadow-2xl p-3'>Rating:{rating.rate}</p>
                    <p className='shadow-2xl p-3'>Student:{student}</p>
                    <Link to={`/checkout/${id}`}>
                        <button className="btn btn-outline btn-success">Get Premium</button>
                    </Link>
                </div>
            </div>
            <div className='text-left p-4 mt-10'>
                <h1 className='font-bold text-4xl text-yellow-300'>{title}</h1> <br />
                <Link to={`/pdf/${id}`}>
                    <button className="btn btn-outline btn-success">Download Pdf</button>
                </Link>
                <div className='flex font-bold'>
                    <div className=' p-3 mr-4 mb-4 shadow-2xl'>
                        <h2>Course Duration</h2>
                        <h2>6 Month</h2>
                    </div>
                    <div className='shadow-2xl p-3 mr-4 mb-4'>
                        <h2>Lecture</h2>
                        <h2>48</h2>
                    </div>
                    <div className='shadow-2xl p-3 mr-4 mb-4'>
                        <h2>Project</h2>
                        <h2>10+</h2>
                    </div>
                </div>
                <p className='text-lg'>{description}</p>
            </div>
        </div>
    );
};

export default ReadMore;