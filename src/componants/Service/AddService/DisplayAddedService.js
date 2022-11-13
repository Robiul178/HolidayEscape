import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';



const DisplayAddedService = ({ addService }) => {
    console.log(addService, 'koi jas')
    const { description, name, photoURL } = addService;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <PhotoProvider>
                        <PhotoView src={photoURL}>
                            <img src={photoURL} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>

                    <p>{description}</p>
                </div>
            </div>

        </div>
    );
};

export default DisplayAddedService;