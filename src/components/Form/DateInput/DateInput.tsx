import React from 'react';
import CustomInput from '../CustomInput/CustomInput';
import classes from '../Form.module.scss';

interface IProps {
  refLink: React.RefObject<HTMLInputElement>;
  validStatus: boolean;
}
export default function NameInput(props: IProps) {
  return (
    <CustomInput
      inputOptions={{
        title: 'Birth Date',
        type: 'date',
        inputSelector: classes.form__date,
        refLink: props.refLink,
      }}
      valid={props.validStatus}
    />
  );
}
