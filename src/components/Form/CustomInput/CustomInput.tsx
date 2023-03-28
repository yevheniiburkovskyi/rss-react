import React from 'react';
import classes from '../Form.module.scss';

interface IOptions {
  title: string;
  type: string;
  inputSelector?: string;
  labelSelector?: string;
  refLink: React.RefObject<HTMLInputElement>;
  otherAttributes?: {
    value?: string | number;
    name?: string;
    defaultChecked?: boolean;
    accept?: string;
  };
}

export default function CustomInput({
  inputOptions,
  defaultValue,
  valid,
}: {
  inputOptions: IOptions;
  defaultValue?: string;
  valid?: boolean;
}) {
  return (
    <label className={inputOptions.labelSelector}>
      <p>{inputOptions.title}</p>
      <input
        type={inputOptions.type}
        ref={inputOptions.refLink}
        className={inputOptions.inputSelector}
        defaultValue={defaultValue}
        {...inputOptions.otherAttributes}
        data-testid={`form-${inputOptions.type}`}
      />
      <p className={classes.invalid}>
        {' '}
        {valid !== undefined && (valid ? '' : `Invalid ${inputOptions.title}`)}
      </p>
    </label>
  );
}
