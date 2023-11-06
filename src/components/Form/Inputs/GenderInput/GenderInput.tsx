import { IRegister } from 'components/Form/Form';
import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import classes from '../../Form.module.scss';

export default function GenderInput({
  register,
  value,
}: {
  register: UseFormRegister<IRegister>;
  value: string;
}) {
  return (
    <label className={classes['form__gender-item']}>
      <h3>{value}</h3>
      <input
        type="radio"
        value={value}
        {...register('gender', {
          required: 'Required field',
        })}
      />
    </label>
  );
}
