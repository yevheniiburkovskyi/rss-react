import { IRegister } from 'components/Form/Form';
import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import classes from '../../Form.module.scss';

export default function FileInput({
  register,
  error,
}: {
  register: UseFormRegister<IRegister>;
  error: FieldError | undefined;
}) {
  return (
    <label className={classes.form__file}>
      <h3>Photo</h3>
      <input
        type="file"
        accept="image/*"
        {...register('filePath', {
          required: 'Required field',
        })}
      ></input>
      <p className={classes.form__error}>{error && error.message}</p>
    </label>
  );
}
