import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../../router/routes';
import classes from './Navigation.module.scss';

export default function Navigation() {
  return (
    <nav className={classes.navigation__list} role="menubar">
      {routes.map((item) =>
        item.name !== '404' ? (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              isActive ? `${classes.link_active} ${classes.link}` : `${classes.link}`
            }
          >
            {item.name}
          </NavLink>
        ) : null
      )}
    </nav>
  );
}
