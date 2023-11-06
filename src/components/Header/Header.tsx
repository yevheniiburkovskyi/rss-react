import React from 'react';
import Navigation from './Navigation/Navigation';
import classes from './Header.module.scss';
import Container from '../Container/Container';
import { useLocation } from 'react-router-dom';
import { routes } from '../../router/routes';

export default function Header() {
  const location = useLocation();

  function showCurrentLocation(str: string) {
    const route = routes.find((item) => item.path === str);
    return route?.name;
  }

  return (
    <header className={classes.header}>
      <Container>
        <div className={classes.header__wrapper}>
          <h1 className={classes.header__title}>{showCurrentLocation(location.pathname)}</h1>
          <Navigation />
        </div>
      </Container>
    </header>
  );
}
