import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        // load data 
        fetch('./tools.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return [services];
}
export default useServices;