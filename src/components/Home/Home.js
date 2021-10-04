import React from 'react';
import useServices from '../../hooks/useServices';
import HomeCourse from '../HomeCourse/HomeCourse';
import Plans from '../Plans/Plans';

const Home = () => {
    const [services] = useServices();
    return (
        <div>
            <Plans></Plans>
            <div className="p-6 w-4/5 m-auto bg-gray-300">
                <h2 className="text-3xl pb-6 font-thin">For you</h2>
                <div className="grid grid-cols-3 gap-8">
                    {
                        services.map(service => <HomeCourse
                            key={service.key}
                            service={service}>
                        </HomeCourse>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;