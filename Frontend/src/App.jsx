import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Nav/Nav.jsx'
import Footer from './components/Footer/Footer.jsx'
import './App.css';
import ErrorBoundary from './ErrorHandeling/ErrorBoundry.jsx';

function App() {
  return (
    <>
      <ErrorBoundary>
        <Navbar />
        <div className='heroCont'>
          <Outlet />
        </div>
        <Footer />
      </ErrorBoundary>

    </>
  );
}

export default App;
