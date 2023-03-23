import React, { Component } from 'react';
import CustomInput from '../CustomInput/CustomInput';
import classes from '../Form.module.scss';

interface IProps {
  refLink: React.RefObject<HTMLInputElement>;
  validStatus: boolean;
}
export default class NameInput extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <CustomInput
        inputOptions={{
          title: 'Birth Date',
          type: 'date',
          inputSelector: classes.form__date,
          refLink: this.props.refLink,
        }}
        valid={this.props.validStatus}
      />
    );
  }
}
