import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext.jsx';
import Loading from '../components/Loading/Loading.jsx';
import axiosInstance from '../axiosInstance.jsx';

const ProtectedRoute = ({ children }) => {
    const { user, setUser } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkUser = async () => {
            try {
                const response = await axiosInstance.get(`/api/auth/protected`);
                setUser(response.data.user);
            } catch (error) {
                setUser(null);
                console.log(error.message)
            } finally {
                setIsLoading(false);
            }
        };

        checkUser();
    }, [setUser]);

    if (isLoading) { return (<Loading />) }

    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;


