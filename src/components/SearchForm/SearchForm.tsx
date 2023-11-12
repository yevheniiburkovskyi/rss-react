import React from 'react';
import classes from './SearchForm.module.scss';

interface IProps {
  inputValue: string;
  setInputValue: (value: string) => void;
}
export default function SearchForm(props: IProps) {
  return (
    <form className={classes.form}>
      <input
        type="search"
        value={props.inputValue}
        onChange={(e) => props.setInputValue(e.target.value)}
        className={classes.form__input}
        placeholder="Search..."
        role="search"
      />
    </form>
  );
}
