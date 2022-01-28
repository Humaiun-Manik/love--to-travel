import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {

    const { AllContexts } = useAuth();
    const { user, loading } = AllContexts;
    const location = useLocation();

    if (loading) {
        return (
            <div className='text-center my-5 py-5'>
                <Spinner animation="border" role="status" variant="danger">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    };

    return user.displayName ? children : <Navigate to="/login" state={{ from: location }} replace />;

};

export default PrivateRoute;