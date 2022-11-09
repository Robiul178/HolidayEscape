import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/UseContext';


const DisplayReview = (props) => {

    const { user } = useContext(AuthContext);
    const { name, textarea } = props.review;




    return (
        <div className='border'>
            <div className='flex'>
                <div className="w-8 rounded">
                    <img src={user?.photoURL} />
                </div>
                <div>
                    <h1 className='text-2x font-semibold'>{name}</h1>
                </div>
            </div>
            <div>
                <p className=''>{textarea}</p>
            </div>
        </div>
    );
};

export default DisplayReview;