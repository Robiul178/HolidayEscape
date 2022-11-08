import React, { useEffect, useState } from 'react';
import DisplayCourse from './DisplayCourse/DisplayCourse';
// import SideMenu from './DisplayCourse/SideMenu/SideMenu';
import './CSS/Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div className='home-container'>
            <div className='course-container ml-14'>
                {
                    courses.map(course => <DisplayCourse
                        course={course}
                        key={course.id}
                    ></DisplayCourse>)
                }
            </div>
            {/* <div className="side-menu">
                {
                    courses.map(course => <SideMenu
                        course={course}
                        key={course.id}
                    ></SideMenu>)

                }
            </div> */}
        </div>
    );
};

export default Courses;