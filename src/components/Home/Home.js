import React, { useEffect, useState } from 'react';
import HomeCourse from '../HomeCourse/HomeCourse';
import Plans from '../Plans/Plans';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        // load data 
        fetch('./homeTools.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div>
            {/* import plans component  */}
            <Plans></Plans>
            <div className="p-6 my-6 w-4/5 m-auto bg-gray-300">
                {/* added some courses by using map from data */}
                <h2 className="text-3xl pb-6 font-thin">For you</h2>
                <div className="grid grid-cols-2 gap-8">
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