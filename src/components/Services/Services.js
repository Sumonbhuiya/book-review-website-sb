import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    // call hooks 
    const [services] = useServices();

    return (
        <div className="p-6 w-4/5 m-auto bg-gray-300 my-6">
            {/* service section  */}
            <h2 className="text-3xl pb-6 font-thin">Courses Starting Soon</h2>
            <div className="grid grid-cols-3 gap-8">
                {/* show courses  */}
                {
                    services.map(service => <Service
                        key={service.key}
                        service={service}>
                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;