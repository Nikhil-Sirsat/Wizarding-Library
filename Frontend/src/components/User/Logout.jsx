import React, { useContext, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext.jsx';

const LogoutButton = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleLogout = async () => {
        setLoading(true);
        await logout();
        navigate('/Home');
    };

    return (
        <button onClick={handleLogout} className="btn btn-secondary">
            {loading ? "loading ... " : 'Logout'}
        </button>
    );
};

export default LogoutButton;
