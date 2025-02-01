
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { Link } from 'react-router-dom';
import LogoutButton from '../User/Logout';

export default function User() {
    const { user } = useContext(AuthContext);

    return (
        <div className="card text-center" style={{ border: 'none', padding:'20px' }}>
            <div className="card-header">
                User Information
            </div>
            <div className="card-body">
                <h5 className="card-title"> email : {user.email} </h5>
                <p className="card-text"> name : {user.name} </p>
                <div style={{ display: 'flex', flexWrap:'wrap', alignItems: 'center', justifyContent: 'center' }}>
                    <Link to={`/user/edit`} className="btn btn-primary">edit</Link>
                    &nbsp; &nbsp; &nbsp;
                    <Link className="nav-link" > <LogoutButton /> </Link>
                </div>
            </div>
        </div>
    );
}