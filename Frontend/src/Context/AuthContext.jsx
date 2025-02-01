
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    // check User
    useEffect(() => {
        const checkUser = async () => {
            try {
                const response = await axios.get('/api/auth/protected', { withCredentials: true });
                setUser(response.data.user);
                console.log("User set in useEffect:", response.data.user);
            } catch (err) {
                setUser(null);
                console.log("Error in useEffect:", err.response ? err.response.data : err.message);
            }
        };
        checkUser();
    }, []);

    const login = async (email, password) => {
        try {
            const response = await axios.post('/api/auth/Login', { email, password }, { withCredentials: true });
            setUser(response.data.user);
            console.log("User set in login:", response.data.user);
            return true;
        } catch (err) {
            console.log("Error in login:", err.response ? err.response.data : err.message);
            return false;
        }
    };

    const logout = async () => {
        try {
            await axios.get('/api/auth/Logout', { withCredentials: true });
            setUser(null);
            console.log("User logged out");
        } catch (err) {
            console.log("Error in logout:", err.response ? err.response.data : err.message);
        }
    };
    return (
        <AuthContext.Provider value={{ user, setUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider, AuthContext };

