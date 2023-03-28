import React from 'react';
import CustomInput from '../CustomInput/CustomInput';
import classes from '../Form.module.scss';

interface IProps {
  refLink: React.RefObject<HTMLInputElement>;
  value: string;
  defaultCheckedStatus?: boolean;
}
export default function RadioInput(props: IProps) {
  return (
    <CustomInput
      inputOptions={{
        title: props.value,
        type: 'radio',
        inputSelector: classes['form__sex-choose-item'],
        labelSelector: classes['form__sex-choose-wrapper'],
        refLink: props.refLink,
        otherAttributes: {
          value: props.value,
          name: 'sex',
        },
      }}
    />
  );
}
