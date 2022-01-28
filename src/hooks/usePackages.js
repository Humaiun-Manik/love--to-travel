import { useEffect, useState } from 'react';

const usePackages = () => {

    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('https://morning-retreat-19009.herokuapp.com/tours')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, []);
    return { packages };
};

export default usePackages;