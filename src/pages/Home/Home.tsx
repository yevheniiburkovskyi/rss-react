import Container from '../../components/Container/Container';
import React, { Component } from 'react';
import CardList from './CardList/CardList';
import classes from './Home.module.scss';
import SearchForm from '../../components/SearchForm/SearchForm';

interface IState {
  inputValue: string;
}
export default class Home extends Component<object, IState> {
  constructor(props: object | Readonly<object>) {
    super(props);
    this.state = {
      inputValue: localStorage.getItem('searchValue') || '',
    };
  }

  componentWillUnmount() {
    localStorage.setItem('searchValue', this.state.inputValue);
  }

  inputHandler(value: string) {
    this.setState({ inputValue: value });
  }

  render() {
    return (
      <section className={classes.home}>
        <Container>
          <SearchForm inputValue={this.state.inputValue} setInput={this.inputHandler.bind(this)} />
          <CardList searchValue={this.state.inputValue} />
        </Container>
      </section>
    );
  }
}
