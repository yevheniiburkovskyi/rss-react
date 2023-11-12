import React from 'react';
import Router from './router/Router';
import classes from './App.module.scss';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <main className={classes.main}>
        <Router />
      </main>
    </>
  );
}

export default App;
