import React, { Component } from 'react';
import classes from '../Form.module.scss';
interface IProps {
  refLink: React.RefObject<HTMLSelectElement>;
  validStatus: boolean;
}
export default class SelectInput extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <label>
        <p>Country</p>
        <select name="select" ref={this.props.refLink} className={classes.form__select}>
          <option value="">--Select Country--</option>
          <option value="Ukraine">Ukraine</option>
          <option value="Poland">Poland</option>
          <option value="France">France</option>
        </select>
        <p className={classes.invalid}>{this.props.validStatus ? '' : 'Invalid Country'}</p>
      </label>
    );
  }
}
