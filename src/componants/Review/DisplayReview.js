import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/UseContext';


const DisplayReview = (props) => {

    const { user } = useContext(AuthContext);
    const { name, textarea } = props.review;


    return (
        <div className='border-b p-4'>
            <div className='flex'>
                <div className="w-8 rounded-sm">
                    <img src={user?.email} />
                </div>
                <div>
                    <h1 className='text-2x font-semibold'>{name}</h1>
                </div>
            </div>
            <div>
                <p >{textarea}</p>
            </div>
        </div>
    );
};

export default DisplayReview;