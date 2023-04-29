import React from 'react';
import Router from './router/Router';
import classes from './App.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main className={classes.main}>
        <Router />
      </main>
      <Footer />
    </>
  );
}

export default App;
