import { IRegister } from 'components/Form/Form';
import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import classes from '../../Form.module.scss';

export default function TermsInput({
  register,
  error,
}: {
  register: UseFormRegister<IRegister>;
  error: FieldError | undefined;
}) {
  return (
    <label className={classes.form__terms}>
      <h3 className={error && classes.form__error}>I consent to my personal data</h3>
      <input
        type="checkbox"
        {...register('terms', {
          required: 'Required field',
        })}
      />
    </label>
  );
}
