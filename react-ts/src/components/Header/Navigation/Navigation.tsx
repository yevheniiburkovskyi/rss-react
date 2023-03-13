import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.scss';

interface IState {
  page: string;
}

export default class Navigation extends Component<object, IState> {
  constructor(props: object | Readonly<object>) {
    super(props);
    this.state = {
      page: 'Home',
    };
  }
  render() {
    return (
      <nav className={classes.navigation__list}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${classes.link_active} ${classes.link}` : `${classes.link}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/About Us"
          className={({ isActive }) =>
            isActive ? `${classes.link_active} ${classes.link}` : `${classes.link}`
          }
        >
          About Us
        </NavLink>
      </nav>
    );
  }
}
