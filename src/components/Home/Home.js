import useServices from '../../hooks/useServices';
import HomeCourse from '../HomeCourse/HomeCourse';
import Plans from '../Plans/Plans';

const Home = () => {
    const [services] = useServices();

    const array = services.filter(service => (service.key === 105) || (service.key === 106) || (service.key === 108) || (service.key === 109));

    return (
        <div>
            {/* import plans component  */}
            <Plans></Plans>
            <div className="p-6 my-6 w-4/5 m-auto bg-gray-300">
                {/* added some courses by using map from data */}
                <h2 className="text-3xl pb-6 font-thin">Courses for you</h2>
                <div className="grid grid-cols-2 gap-14">
                    {
                        array.map(service => <HomeCourse
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