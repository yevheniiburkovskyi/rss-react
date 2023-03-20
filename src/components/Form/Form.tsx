import { Button } from '../Button/Button';
import React, { Component, FormEvent } from 'react';
import classes from './Form.module.scss';

export default class Form extends Component {
  text: React.RefObject<HTMLInputElement>;
  date: React.RefObject<HTMLInputElement>;
  select: React.RefObject<HTMLSelectElement>;
  checkbox: React.RefObject<HTMLInputElement>;
  radio: React.RefObject<HTMLInputElement>;

  constructor(props: object) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.text = React.createRef();
    this.date = React.createRef();
    this.select = React.createRef();
    this.checkbox = React.createRef();
    this.radio = React.createRef();
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(
      this.text.current?.value,
      this.date.current?.value,
      this.select.current?.value,
      this.checkbox.current?.value,
      this.radio.current?.value
    );
  }
  render() {
    return (
      <form className={classes.form} onSubmit={this.handleSubmit}>
        <label htmlFor="title">
          Name
          <br />
          <input type="text" ref={this.text} className={classes.form__input} />
        </label>
        <label htmlFor="date">
          Date
          <br />
          <input type="date" ref={this.date} className={classes.form__date} />
        </label>
        <label htmlFor="select">
          Country
          <br />
          <select name="select" id="select" ref={this.select} className={classes.form__select}>
            <option value="Ukraine">Ukraine</option>
            <option value="Poland">Poland</option>
            <option value="France">France</option>
          </select>
        </label>
        <div className={classes.form__sex}>
          <label htmlFor="radio">
            Male
            <input
              type="radio"
              ref={this.radio}
              className={classes['form__sex-choose']}
              name="sex"
              value="Male"
              defaultChecked
            />
          </label>
          <label htmlFor="radio">
            Female
            <input
              type="radio"
              ref={this.radio}
              className={classes['form__sex-choose']}
              value="Female"
              name="sex"
            />
          </label>
        </div>
        <label className={classes.form__file}>
          Click here to upload photo
          <input type="file" className={classes.form__file} />
        </label>
        <label htmlFor="checkbox" className={classes.form__checkbox}>
          <input type="checkbox" ref={this.checkbox} />
          <p>I consent to my personal data</p>
        </label>
        <Button content={'Submit'} type="submit" />
      </form>
    );
  }
}
