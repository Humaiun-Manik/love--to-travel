import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
import usePackages from '../hooks/usePackages';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const AllContexts = useFirebase();
    const { packages } = usePackages();
    const data = { AllContexts, packages };

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;