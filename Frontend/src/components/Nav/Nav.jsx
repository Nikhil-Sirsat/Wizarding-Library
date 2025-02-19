
import { useContext } from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/loading2.png';
import { AuthContext } from '../../Context/AuthContext';

export default function Nav() {
  const { user, loading } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img className="navbar-brand" src={Logo} alt="logo"></img>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to='/Home' className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}> Home </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/About' className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}> About </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Discover
              </a>
              <ul className="dropdown-menu">
                <li><NavLink to='/Movies' className={({ isActive }) => "dropdown-item" + (isActive ? " active" : "")}> Movies </NavLink></li>
                <li><NavLink to='/Books' className={({ isActive }) => "dropdown-item" + (isActive ? " active" : "")}> Books </NavLink></li>
                <li><NavLink to='/Characters' className={({ isActive }) => "dropdown-item" + (isActive ? " active" : "")}> Characters </NavLink></li>
              </ul>
            </li>
          </ul>
          <div className="navbar-nav">
            {
              (loading) ? (
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                (!user) ? (
                  <>
                    <div className="nav-item"> <NavLink to='/SignUp' className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}> SignUp </NavLink> </div>
                    <div className="nav-item"> <NavLink to='/login' className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}> Login </NavLink> </div>
                  </>
                ) :
                  (
                    <div className="nav-item"> <NavLink to={`/user`} className={({ isActive }) => "nav-link user" + (isActive ? " active" : "")}> <i className="fa-solid fa-user"></i> </NavLink> </div>
                  )
              )
            }
          </div>
        </div>
      </div>
    </nav>
  );
}
