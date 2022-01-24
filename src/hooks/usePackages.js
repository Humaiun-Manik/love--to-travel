import { useEffect, useState } from 'react';

const usePackages = () => {

    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('/Packages.json')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [])
    return { packages };
};

export default usePackages;