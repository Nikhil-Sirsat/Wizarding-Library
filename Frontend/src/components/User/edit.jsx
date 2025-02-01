import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext.jsx';

const Edit = () => {
    const { user } = useContext(AuthContext);
    const [formData, setFormData] = useState(
        {
            name: `${user.name}`,
            email: `${user.email}`,
            password: '',
        }
    );
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const passwordCheck = await axios.post('/api/auth/check-password', {
                userId: user._id,
                password: formData.password
            });
            if (passwordCheck.data.valid) {
                try {
                    await axios.put(`/api/auth/edit/${user._id}`, {
                        user: {
                            name: formData.name,
                            email: formData.email
                        }
                    });
                    const success = await login(formData.email, formData.password);
                    if (success) {
                        setMessage("User information Updated Successfully");
                        navigate(`/user`);
                    } else {
                        setMessage('error in Login');
                    }
                } catch (error) {
                    console.log(`Error in Updating : ${error.message}`);
                    setMessage('Incorrect Password');
                }
            } else {
                setMessage('Incorrect Password');
            }
        } catch (error) {
            setMessage("Incorrect Password");
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header text-center">
                            <h3>Update</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        placeholder={user.name}
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder={user.email}
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
                                        placeholder='Enter Password'
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Update</button>
                            </form>
                            {message && <div className="mt-3 alert alert-danger">{message}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edit;
