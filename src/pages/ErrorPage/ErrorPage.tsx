import React from 'react';
import classes from './ErrorPage.module.scss';

export default function ErrorPage() {
  return (
    <section className={classes.error}>
      <h2 className={classes.error__title}>404</h2>
    </section>
  );
}
