import { IRegister } from 'components/Form/Form';
import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import classes from '../../Form.module.scss';
export default function CountryInput({
  register,
  error,
}: {
  register: UseFormRegister<IRegister>;
  error: FieldError | undefined;
}) {
  return (
    <label className={classes.form__country}>
      <h3>Country</h3>
      <select
        {...register('country', {
          required: 'Required field',
        })}
      >
        <option value="">--Choose country--</option>
        <option value="Ukraine">Ukraine</option>
        <option value="Poland">Poland</option>
        <option value="France">France</option>
      </select>
      <p className={classes.form__error}>{error && error.message}</p>
    </label>
  );
}
