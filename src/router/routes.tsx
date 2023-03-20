import AboutUs from '../pages/AboutUs/AboutUs';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import React from 'react';
import Form from '../pages/Form/Form';

export const routes = [
  {
    name: 'Home',
    path: '/',
    element: <Home />,
  },
  {
    name: 'About us',
    path: '/About Us',
    element: <AboutUs />,
  },
  {
    name: 'Form',
    path: '/Form',
    element: <Form />,
  },
  {
    name: '404',
    path: '/*',
    element: <ErrorPage />,
  },
];
