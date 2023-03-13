import React, { Component } from 'react';
import Navigation from './Navigation/Navigation';
import classes from './Header.module.scss';
import Container from '../Container/Container';

interface IProps {
  currentPage: string;
}
export default class Header extends Component<unknown, IProps> {
  constructor(props: IProps | Readonly<IProps>) {
    super(props);
    this.state = {
      currentPage: 'Home',
    };
  }

  render() {
    return (
      <header className={classes.header}>
        <Container>
          <div className={classes.header__wrapper}>
            <h1 className={classes.header__title}>RSS-React</h1>
            <Navigation />
          </div>
        </Container>
      </header>
    );
  }
}
