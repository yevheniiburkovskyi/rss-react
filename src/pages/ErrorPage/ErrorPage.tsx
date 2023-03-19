import React, { Component } from 'react';
import classes from './ErrorPage.module.scss';
export default class ErrorPage extends Component {
  render() {
    return (
      <section className={classes.error}>
        <h2 className={classes.error__title}>404</h2>
      </section>
    );
  }
}
