import AboutUs from '../pages/AboutUs/AboutUs';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import React from 'react';

export const routes = [
  {
    name: 'home',
    path: '/',
    element: <Home />,
  },
  {
    name: 'about us',
    path: '/About Us',
    element: <AboutUs />,
  },
  {
    name: '404',
    path: '/*',
    element: <ErrorPage />,
  },
];
