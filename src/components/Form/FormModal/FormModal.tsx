import ModalWindow from '../../../components/ModalWindow/ModalWindow';
import React from 'react';
import classes from './FormModal.module.scss';

export default function FormModal() {
  return (
    <ModalWindow>
      <div className={classes.content}>New user successfully created!</div>
    </ModalWindow>
  );
}
