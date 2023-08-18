import { IRegister } from 'components/Form/Form';
import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import classes from '../../Form.module.scss';

export default function DateInput({
  register,
  error,
}: {
  register: UseFormRegister<IRegister>;
  error: FieldError | undefined;
}) {
  function checkDate(value: string | undefined) {
    if (value) {
      if (Date.parse(value) < Date.parse(new Date().toString())) {
        return true;
      } else {
        return 'Date must be lower than current date';
      }
    }
  }

  return (
    <label className={classes.form__date}>
      <h3>Date</h3>
      <input
        type="date"
        {...register('date', {
          required: 'Required field',
          validate: { checkDate },
        })}
      />
      <p className={classes.form__error}>{error && error.message}</p>
    </label>
  );
}
