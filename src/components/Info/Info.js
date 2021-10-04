import React from 'react';

const Info = (props) => {
    const { name, about } = props.service;
    return (
        // showing languages description from data 
        <div className="p-3 rounded-md border border-gray-200 bg-gray-100 flex">
            <div className=" pt-2 px-5">
                <div className="text-left">
                    <h4 className="text-xl text-blue-600 font-bold underline">{name}</h4>
                    <p><small className="text-gray-600 text-lg font-thin">{about}</small></p>
                </div>
            </div>
        </div>
    );
};

export default Info;