import React, { Component } from 'react';
import Navigation from './Navigation/Navigation';
import classes from './Header.module.scss';
import Container from '../Container/Container';

interface IProps {
  currentPage: string;
  changePage: boolean;
}
export default class Header extends Component<unknown, IProps> {
  constructor(props: IProps | Readonly<IProps>) {
    super(props);
    this.state = {
      currentPage: 'Home',
      changePage: true,
    };
  }

  locationHandler() {
    let currentLocation = '';
    const page = location.pathname;
    if (page === '/') {
      currentLocation = 'Home';
    } else {
      const locationArr = page.match(/[a-z]{1,}/gi);
      if (locationArr) {
        currentLocation = locationArr.length > 1 ? locationArr.join(' ') : locationArr.join();
      }
    }
    this.setState({ currentPage: currentLocation });
  }

  componentDidUpdate(_prevProps: { changePage: boolean }, prevState: { changePage: boolean }) {
    if (prevState.changePage !== this.state.changePage) this.locationHandler();
  }

  componentDidMount() {
    this.locationHandler();
  }

  changePageHandler() {
    this.setState((state) => {
      return { changePage: !state.changePage };
    });
  }

  render() {
    return (
      <header className={classes.header}>
        <Container>
          <div className={classes.header__wrapper}>
            <h1 className={classes.header__title}>{this.state.currentPage}</h1>
            <Navigation changePage={this.changePageHandler.bind(this)} />
          </div>
        </Container>
      </header>
    );
  }
}
