import Header from './components/Header/Header';
import React, { Component } from 'react';
import Router from './router/Router';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Router />
        </main>
      </>
    );
  }
}

export default App;
