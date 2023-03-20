import AboutUs from '../pages/AboutUs/AboutUs';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import React from 'react';
import FormPage from '../pages/FormPage/FormPage';

export const routes = [
  {
    name: 'Home',
    path: '/',
    element: <Home />,
  },
  {
    name: 'About us',
    path: '/About',
    element: <AboutUs />,
  },
  {
    name: 'Form',
    path: '/Form',
    element: <FormPage />,
  },
  {
    name: '404',
    path: '/*',
    element: <ErrorPage />,
  },
];
