import React from 'react';
import classes from '../Form.module.scss';

interface IProps {
  refLink: React.RefObject<HTMLInputElement>;
  validStatus: boolean;
}
export default function CheckBoxInput(props: IProps) {
  return (
    <label htmlFor="form-checkbox" className={classes.form__checkbox}>
      <input type="checkbox" ref={props.refLink} id="form-checkbox" data-testid="form-terms" />
      <p className={props.validStatus ? '' : classes.invalid} data-testid="form-terms-invalid">
        I consent to my personal data
      </p>
    </label>
  );
}
