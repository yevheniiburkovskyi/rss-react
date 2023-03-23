import React, { Component } from 'react';
import classes from './FormModal.module.scss';

export default class FormModal extends Component {
  render() {
    return (
      <section className={classes.modal__overlay}>
        <div className={classes.modal__window}>New user successfully created!</div>
      </section>
    );
  }
}
