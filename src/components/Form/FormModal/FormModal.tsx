import React from 'react';
import ReactDOM from 'react-dom';
import classes from './FormModal.module.scss';

export default function FormModal() {
  return ReactDOM.createPortal(
    <section className={classes.modal__overlay} data-testid="form__modal">
      <div className={classes.modal__window}>New user successfully created!</div>
    </section>,
    document.getElementById('overlay-root') as HTMLElement // we can use this manipulation for createPortal (read answers)
  );
}
