import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            {/* not found page  */}
            <img className="m-auto h-28 p-6" src="https://jatheon.com/wp-content/uploads/2018/03/404-image.png" alt="" />
            <p className="text-xl pb-4">Page not found</p>
            <br />
            <div className="py-6">
                <NavLink to="/home"><small className="text-xl">Go to</small> <button className="text-base text-white py-2 px-8 rounded-md border border-gray-200 bg-red-400 hover:bg-red-500">Home</button></NavLink>
            </div>
            <br />
            <br />
            <br /><br /><br /><br /><br /><br />
        </div>
    );
};

export default NotFound;