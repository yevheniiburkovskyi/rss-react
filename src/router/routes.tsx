import AboutUs from '../pages/AboutUs/AboutUs';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import React from 'react';

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
    name: '404',
    path: '/*',
    element: <ErrorPage />,
  },
];
