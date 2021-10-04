import React from 'react';
import { NavLink } from 'react-router-dom';

const Service = (props) => {
    const { name, pic, teacher, cost, date } = props.service;
    return (
        <div className="p-3 rounded-md border border-gray-200 bg-gray-100">
            <div className="h-65 bg-black">
                <img className="h-40 w-80 m-auto " src={pic} alt="" />
                <h3 className="text-white m-auto text-2xl">introduction to {name}</h3>
            </div>
            <div className=" pt-2 px-5 flex">
                <div className="text-left">
                    <h4 className="text-2xl text-blue-600 font-bold">{name}</h4>
                    <p><small className="text-gray-500">Teacher: <NavLink to="/teacher" className="bg-yellow-200">{teacher.name}</NavLink></small></p>
                    <p><small className="text-gray-500">Start Date: {date}</small></p>
                </div>
                <div className="m-auto pl-8">
                    <p className="text-3xl text-gray-700 hover:text-blue-500">${cost}</p>
                </div>
            </div>
            <div className="pt-6">
                <button className="text-base text-white py-2 px-8 rounded-md border border-gray-200 bg-red-400 hover:bg-red-500">Enroll</button>
            </div>
        </div>
    );
};

export default Service;