import React from 'react';
import useServices from '../../hooks/useServices';
import Teacher from '../Teacher/Teacher';

const Teachers = () => {
    const [services] = useServices();
    return (
        <div className="p-6 w-4/5 m-auto bg-gray-300">
            <h2 className="text-3xl pb-6 font-thin">Meet our teachers</h2>
            <div className="grid grid-cols-3 gap-4">
                {
                    services.map(service => <Teacher
                        key={service.key}
                        service={service}
                    ></Teacher>)
                }
            </div>
        </div>
    );
};

export default Teachers;