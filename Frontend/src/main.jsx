import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

import Home from './components/Home/home.jsx';
import About from './components/About/About.jsx';
import MoviesCont from './components/MoviesCont/MoviesCont.jsx';
import BooksCont from './components/BooksCont/BooksCont.jsx';
import CharactersCont from './components/CharactersCont/CharactorsCont.jsx';
import ViewMovie from './components/MoviesCont/ViewMovie.jsx';
import ViewBook from './components/BooksCont/ViewBook.jsx';
import ViewCharacter from './components/CharactersCont/ViewCharacter.jsx';
import LostPath from './components/Lost/Lost.jsx';
import User from './components/User/showUser.jsx';
import SignUp from './components/User/SignUp.jsx';
import Login from './components/User/Login.jsx';
import Edit from './components/User/edit.jsx';

import ProtectedRoute from './ProtectedRoutes/ProtectedRoutes.jsx';
import { AuthProvider } from './Context/AuthContext.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'Home',
        element: <Home />
      },
      {
        path: 'About',
        element: <About />
      },
      {
        path: 'Movies',
        element: <ProtectedRoute><MoviesCont /></ProtectedRoute>
      },
      {
        path: 'Movies/:id',
        element: <ProtectedRoute><ViewMovie /></ProtectedRoute>
      },
      {
        path: 'Books',
        element: <ProtectedRoute><BooksCont /></ProtectedRoute>
      },
      {
        path: 'Books/:id',
        element: <ProtectedRoute><ViewBook /></ProtectedRoute>
      },
      {
        path: 'Characters',
        element: <ProtectedRoute><CharactersCont /></ProtectedRoute>
      },
      {
        path: 'Characters/:id',
        element: <ProtectedRoute><ViewCharacter /></ProtectedRoute>
      },
      {
        path: 'user',
        element: <ProtectedRoute><User /></ProtectedRoute>
      },
      {
        path: '/user/edit',
        element: <ProtectedRoute><Edit /></ProtectedRoute>
      },
      {
        path: 'SignUp',
        element: <SignUp />
      },
      {
        path: 'login',
        element: <Login />
      },
    ]
  },
  {
    path: '*',
    element: <LostPath />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
  // </React.StrictMode>
);
