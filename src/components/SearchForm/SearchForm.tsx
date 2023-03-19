import React, { Component } from 'react';
import classes from './SearchForm.module.scss';

interface IProps {
  inputValue: string;
  setInput: (value: string) => void;
}
export default class SearchForm extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <form className={classes.form} role="search">
        <input
          type="search"
          value={this.props.inputValue}
          onChange={(e) => this.props.setInput(e.target.value)}
          className={classes.form__input}
          placeholder="Search..."
        />
      </form>
    );
  }
}
