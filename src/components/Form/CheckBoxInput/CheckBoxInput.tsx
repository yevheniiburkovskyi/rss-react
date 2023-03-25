import React, { Component } from 'react';
import classes from '../Form.module.scss';

interface IProps {
  refLink: React.RefObject<HTMLInputElement>;
  validStatus: boolean;
}
export default class CheckBoxInput extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <label htmlFor="form-checkbox" className={classes.form__checkbox}>
        <input
          type="checkbox"
          ref={this.props.refLink}
          id="form-checkbox"
          data-testid="form-terms"
        />
        <p
          className={this.props.validStatus ? '' : classes.invalid}
          data-testid="form-terms-invalid"
        >
          I consent to my personal data
        </p>
      </label>
    );
  }
}
