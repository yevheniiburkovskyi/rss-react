import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';

export default class Router extends Component {
  render() {
    return (
      <Routes>
        {routes.map((item) => (
          <Route key={item.name} path={item.path} element={item.element}></Route>
        ))}
      </Routes>
    );
  }
}
