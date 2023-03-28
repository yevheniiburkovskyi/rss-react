import React from 'react';
import classes from '../Form.module.scss';
interface IProps {
  refLink: React.RefObject<HTMLSelectElement>;
  validStatus: boolean;
}
export default function SelectInput(props: IProps) {
  return (
    <label>
      <p>Country</p>
      <select
        name="select"
        ref={props.refLink}
        className={classes.form__select}
        data-testid="form-select"
      >
        <option value="">--Select Country--</option>
        <option value="Ukraine">Ukraine</option>
        <option value="Poland">Poland</option>
        <option value="France">France</option>
      </select>
      <p className={classes.invalid} data-testid="form-select-invalid">
        {props.validStatus ? '' : 'Invalid Country'}
      </p>
    </label>
  );
}
