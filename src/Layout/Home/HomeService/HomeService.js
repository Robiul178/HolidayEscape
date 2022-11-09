import React from 'react';
import { Link } from 'react-router-dom';

const HomeService = (props) => {
    const { image, title, id, description, price, rating } = props.service;
    return (
        <div className='main-container'>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>{
                            description.length > 90 ?
                                <p>{description.slice(0, 90) + '...'}</p>
                                :
                                <p>{description}</p>
                        }</p>
                        <div className="card-actions justify-between">
                            <div><p className='text-xl font-semibold'>Price:${price}</p></div>
                            <div><p className='text-xl font-semibold'>Rating:{rating}</p></div>
                            <div><Link to={`/seemore/${id}`}><button className='btn'>See More</button></Link> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeService;