import React from 'react';
import CustomInput from '../CustomInput/CustomInput';
import classes from '../Form.module.scss';

interface IProps {
  refLink: React.RefObject<HTMLInputElement>;
  validStatus: boolean;
}
export default function FileInput(props: IProps) {
  return (
    <CustomInput
      inputOptions={{
        title: 'Photo',
        type: 'file',
        labelSelector: classes['form__file'],
        refLink: props.refLink,
        otherAttributes: {
          accept: 'image/*',
        },
      }}
      valid={props.validStatus}
    />
  );
}
