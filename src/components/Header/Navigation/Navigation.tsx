import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../../router/routes';
import classes from './Navigation.module.scss';

interface IProps {
  changePage: () => void;
}
export default class Navigation extends Component<IProps> {
  constructor(props: IProps | Readonly<IProps>) {
    super(props);
  }
  render() {
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
              onClick={() => this.props.changePage()}
            >
              {item.name}
            </NavLink>
          ) : null
        )}
      </nav>
    );
  }
}
