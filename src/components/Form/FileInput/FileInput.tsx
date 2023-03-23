import React, { Component } from 'react';
import CustomInput from '../CustomInput/CustomInput';
import classes from '../Form.module.scss';

interface IProps {
  refLink: React.RefObject<HTMLInputElement>;
  validStatus: boolean;
}
export default class FileInput extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <CustomInput
        inputOptions={{
          title: 'Photo',
          type: 'file',
          labelSelector: classes['form__file'],
          refLink: this.props.refLink,
          otherAttributes: {
            accept: '.jpg, .jpeg, .png, .webp',
          },
        }}
        valid={this.props.validStatus}
      />
    );
  }
}
