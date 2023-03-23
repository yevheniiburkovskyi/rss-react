import React, { Component } from 'react';
import CustomInput from '../CustomInput/CustomInput';
import classes from '../Form.module.scss';

interface IProps {
  refLink: React.RefObject<HTMLInputElement>;
  value: string;
  defaultCheckedStatus?: boolean;
}
export default class RadioInput extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <CustomInput
        inputOptions={{
          title: this.props.value,
          type: 'radio',
          inputSelector: classes['form__sex-choose-item'],
          labelSelector: classes['form__sex-choose-wrapper'],
          refLink: this.props.refLink,
          otherAttributes: {
            value: this.props.value,
            name: 'sex',
            defaultChecked: this.props.defaultCheckedStatus,
          },
        }}
      />
    );
  }
}
