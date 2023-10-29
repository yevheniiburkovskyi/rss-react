import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${classes.link_active} ${classes.link}` : `${classes.link}`
          }
          onClick={() => this.props.changePage()}
        >
          Home
        </NavLink>
        <NavLink
          to="/About Us"
          className={({ isActive }) =>
            isActive ? `${classes.link_active} ${classes.link}` : `${classes.link}`
          }
          onClick={() => this.props.changePage()}
        >
          About Us
        </NavLink>
      </nav>
    );
  }
}
