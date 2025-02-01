import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext.jsx';
import axios from 'axios';
import Loading from '../components/Loading/Loading.jsx';

const ProtectedRoute = ({ children }) => {
    const { user, setUser } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkUser = async () => {
            try {
                const response = await axios.get('/api/auth/protected', { withCredentials: true });
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


