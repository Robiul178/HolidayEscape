import React from 'react';
import img11 from './2916.jpg';
import img22 from './sainMartin.jpg';
import './About.css'

const About = () => {
    return (
        <div className='pt-16'>
            <div class="flex flex-row">
                <div class="basis-1/2">
                    <div>
                        <h2 className='font-semibold text-orange-500'>ABOUT US</h2>
                        <h1 className='text-4xl pt-3 pb-4 font-semibold'>Explore All Corners of <br /> Bangladesh with Us</h1>
                        <p>
                            Know Bangladesh
                            Bangladesh is Located in the north-eastern part of South Asia. The majestic Himalayas stand some distance to the north, while in the south lays the Bay of Bengal. West Bengal borders on the west and in the east lies the hilly and forested regions of Tripura, Mizoram (India) and Myanmar. These picturesque geographical boundaries frame a low lying plain of about 1,47,570 square kilometer, criss-crossed by innumerable rivers and streams. Mighty rivers are Padma (Ganges), Brahmaputra (Jamuna), Meghna and Karnafuli.</p>
                    </div>
                </div>
                <div className='img-about' class=" basis-1/4">
                    <img src={img11} alt="" />
                </div>
                <div className='' class="basis-1/4">
                    <img src={img22} alt="" />
                </div>
            </div>
        </div >
    );
};

export default About;