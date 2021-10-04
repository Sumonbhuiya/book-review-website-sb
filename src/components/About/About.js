import React from 'react';
import { NavLink } from 'react-router-dom';
import Contact from '../Contact/Contact';

const About = () => {
    return (
        <div>
            <div className="p-8">
                <h2 className="text-3xl py-5 font-thin">You need to help!</h2>
                <p className="w-3/5 m-auto font-thin text-lg text-gray-600">If you are interested to learn about programming language. Then we are ready to help you. For bright future without west your time, quickly enroll our <NavLink to="/service" className="bg-yellow-200">courses</NavLink> which you are interested to learn. <br /> If you want to know about our <NavLink to="/teacher" className="bg-yellow-200">teachers</NavLink> teaching quality, then you can join our free classs. After completed the course we are proving you a certificate. Which is helping you to join any job sector.</p>
                <p className="py-6">If you want to know about programming languages work <NavLink to="/info" className="text-blue-500">Click here</NavLink></p>
            </div>
            <Contact></Contact>
        </div>
    );
};

export default About;