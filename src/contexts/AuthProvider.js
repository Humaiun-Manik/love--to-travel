import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
import useOrder from '../hooks/useOrder';
import usePackages from '../hooks/usePackages';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const AllContexts = useFirebase();
    const { packages } = usePackages();
    const { addToMyOrder, selectedTour, setSelectedTour, remove } = useOrder();
    const data = { AllContexts, packages, addToMyOrder, selectedTour, setSelectedTour, remove };

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;