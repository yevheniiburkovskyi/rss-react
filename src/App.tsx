import React from 'react';
import Router from './router/Router';
import classes from './App.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <main className={classes.main}>
        <Router />
      </main>
      <Footer />
    </Provider>
  );
}

export default App;
