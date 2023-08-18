import { IRegister } from 'components/Form/Form';
import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import classes from '../../Form.module.scss';

export default function NameInput({
  register,
  error,
}: {
  register: UseFormRegister<IRegister>;
  error: FieldError | undefined;
}) {
  return (
    <label className={classes.form__name}>
      <h3>Name</h3>
      <input
        type="text"
        {...register('name', {
          required: 'Required field',
          pattern: {
            value: /^[A-Z]{1}[a-z]{1,}/,
            message: 'Name must start with a upper letter and have at least 2 letters',
          },
        })}
      />
      <p className={classes.form__error}>{error && error.message}</p>
    </label>
  );
}
