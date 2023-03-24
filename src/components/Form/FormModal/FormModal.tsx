import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classes from './FormModal.module.scss';

export default class FormModal extends Component {
  render() {
    return ReactDOM.createPortal(
      <section className={classes.modal__overlay}>
        <div className={classes.modal__window}>New user successfully created!</div>
      </section>,
      document.getElementById('overlay-root') as HTMLElement // we can use this manipulation for createPortal (read answers)
    );
  }
}
