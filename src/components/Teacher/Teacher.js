import React from 'react';

const Teacher = (props) => {
    const { teacher } = props.service;
    return (
        // teachers section 
        <div className="p-3 rounded-md border border-gray-200 bg-gray-100 flex">
            {/* teacher image  */}
            <div className="my-auto">
                <img className="h-24 w-24 rounded-full" src={teacher.img} alt="" />
            </div>
            {/* teacher description  */}
            <div className=" pt-2 px-5">
                <div className="text-left">
                    <h4 className="text-xl text-blue-600 font-bold">{teacher.name}</h4>
                    <p><small className="text-gray-500">Teacher age: <span className="text-blue-400">{teacher.age}</span></small></p>
                    <p><small className="text-gray-500">Exprience on {teacher.subject}: <span className="text-blue-400">{teacher.exprience}</span></small></p>
                    <p><small className="text-gray-500">Contact: <span className="text-blue-400">{teacher.contact}</span></small></p>
                </div>
            </div>
        </div>
    );
};

export default Teacher;