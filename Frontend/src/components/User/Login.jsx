import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext.jsx';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [showCookieAlert, setShowCookieAlert] = useState(true); // Alert visibility state

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        const trimmedEmail = formData.email.trim();
        const trimmedPassword = formData.password.trim();

        const success = await login(trimmedEmail, trimmedPassword);
        if (success) {
            navigate(-1);
        } else {
            setMessage('Invalid credentials');
            setLoading(false);
        }
    };

    const handleCloseAlert = () => {
        setShowCookieAlert(false); // Hide alert on close
    };

    return (
        <div className="container">
            {/* Centered Alert */}
            {showCookieAlert && (
                <div
                    className="alert alert-warning position-fixed top-50 start-50 translate-middle text-center"
                    style={{ zIndex: 1050, width: '80%', maxWidth: '500px', borderRadius: '10px' }}
                >
                    <strong>Important Notice: Enable Third-Party Cookies</strong>
                    <p className="mt-2">
                        To ensure a seamless login experience, please enable third-party cookies in your browser settings.
                        <br />
                        <strong>For Google Chrome:</strong> Open <i>Settings</i> → <i>Privacy & Security</i> → <i>Cookies and other site data</i>.
                        <br />
                        <strong>For Safari (Apple Devices):</strong> Open <i>Settings</i> → <i>Safari</i> → <i>Privacy & Security</i> and disable <i>Prevent Cross-Site Tracking</i>.
                    </p>
                    <button onClick={handleCloseAlert} className="btn btn-sm btn-outline-dark mt-2">
                        Close
                    </button>
                </div>
            )}

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header text-center">
                            <h3>Login</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">
                                    {loading ? "Loading..." : "Login"}
                                </button>
                            </form>
                            {message && <div className="mt-3 alert alert-danger">{message}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;