import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeCourse = (props) => {
    const { name, pic, teacher, cost, date } = props.service;
    return (
        // service cart 
        <div className="p-3 rounded-md border border-gray-200 bg-gray-100">
            {/* header  */}
            <div className="bg-black">
                <img className="h-50 w-100% m-auto " src={pic} alt="" />
                <h3 className="text-white m-auto text-2xl">introduction to {name}</h3>
            </div>
            {/* mid details  */}
            <div className=" pt-2 px-5 flex">
                <div className="text-left">
                    <h4 className="text-2xl text-blue-600 font-bold">{name}</h4>
                    <div className="p-3">
                        <p><small className="text-xl text-gray-500">Teacher: <NavLink to="/teacher" className="bg-yellow-200">{teacher.name}</NavLink></small></p>
                        <p><small className="text-gray-500">Class Start: {date}</small></p>
                    </div>
                </div>
                <div className="m-auto pl-8">
                    <p className="text-3xl text-gray-700 hover:text-red-600">${cost}</p>
                </div>
            </div>
            {/* footer or button  */}
            <div className="pt-6">
                <button className="text-base text-white py-2 px-8 rounded-md border border-gray-200 bg-red-400 hover:bg-red-500">Enroll</button>
            </div>
        </div>
    );
};

export default HomeCourse;