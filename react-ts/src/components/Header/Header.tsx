import React, { Component } from 'react';
import Navigation from './Navigation/Navigation';
import classes from './Header.module.scss';

export default class Header extends Component {
  render() {
    return (
      <header className={classes.header}>
        <div className={`header__container ${classes.header__wrapper}`}>
          <h1 className={classes.header__title}>RSS-React</h1>
          <Navigation />
        </div>
      </header>
    );
  }
}
