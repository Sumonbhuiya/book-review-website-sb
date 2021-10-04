import React from 'react';
import { NavLink } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import Info from '../Info/Info';

const Infos = () => {
    // call hooks 
    const [services] = useServices();
    return (
        // info section 
        <div className="p-6 w-4/5 m-auto bg-gray-300">
            <h2 className="text-3xl pb-6 font-thin">Works of language</h2>
            <div>
                {/* import info  */}
                {
                    services.map(service => <Info
                        key={service.key}
                        service={service}
                    ></Info>)
                }
            </div>
            <p className="py-6">For go back <NavLink to="/about" className="text-blue-500">Click here</NavLink></p>
        </div>
    );
};

export default Infos;