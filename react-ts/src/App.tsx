import Header from './components/Header/Header';
import React, { Component } from 'react';
import Router from './router/Router';
import classes from './App.module.scss';
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main className={classes.main}>
          <Router />
        </main>
      </>
    );
  }
}

export default App;
