import React from 'react';
import classes from './Button.module.scss';

interface IProps {
  content?: string;
  onClickFunc?: () => void;
  type?: string;
}

export default function Button(props: IProps) {
  return (
    <button className={classes.button} onClick={props.onClickFunc}>
      {props.content}
    </button>
  );
}
