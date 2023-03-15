import Container from '../../components/Container/Container';
import React, { Component } from 'react';
import CardList from './CardList/CardList';
import classes from './Home.module.scss';
export default class Home extends Component {
  render() {
    return (
      <section className={classes.home}>
        <Container>
          <CardList />
        </Container>
      </section>
    );
  }
}
