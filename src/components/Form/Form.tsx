import { Button } from '../Button/Button';
import React, { Component, FormEvent } from 'react';
import classes from './Form.module.scss';
import { IUserData } from 'pages/FormPage/FormPage';
import CustomInput from './CustomInput/CustomInput';

interface IProps {
  updateArr: (user: IUserData) => void;
}
export default class Form extends Component<IProps> {
  id: number;
  name: React.RefObject<HTMLInputElement>;
  date: React.RefObject<HTMLInputElement>;
  select: React.RefObject<HTMLSelectElement>;
  checkbox: React.RefObject<HTMLInputElement>;
  male: React.RefObject<HTMLInputElement>;
  female: React.RefObject<HTMLInputElement>;
  file: React.RefObject<HTMLInputElement>;

  constructor(props: IProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.id = 0;
    this.name = React.createRef();
    this.date = React.createRef();
    this.select = React.createRef();
    this.checkbox = React.createRef();
    this.male = React.createRef();
    this.female = React.createRef();
    this.file = React.createRef();
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const userObj = {
      id: this.id++,
      name: this.name.current?.value,
      date: this.date.current?.value,
      country: this.select.current?.value,
      sex: this.male.current?.checked ? this.male.current.value : this.female.current?.value,
      check: this.checkbox.current?.checked,
      file: this.file.current?.files ? this.file.current?.files[0] : undefined,
    };
    this.props.updateArr(userObj);
  }

  render() {
    return (
      <form className={classes.form} onSubmit={this.handleSubmit}>
        <CustomInput
          inputOptions={{
            title: 'Name',
            type: 'name',
            inputSelector: classes.form__input,
            refLink: this.name,
          }}
        />
        <CustomInput
          inputOptions={{
            title: 'Date',
            type: 'date',
            inputSelector: classes.form__date,
            refLink: this.date,
          }}
        />
        <label>
          <p>Country</p>
          <select name="select" ref={this.select} className={classes.form__select}>
            <option value="Ukraine">Ukraine</option>
            <option value="Poland">Poland</option>
            <option value="France">France</option>
          </select>
        </label>
        <div className={classes.form__sex}>
          <CustomInput
            inputOptions={{
              title: 'Male',
              type: 'radio',
              inputSelector: classes['form__sex-choose-item'],
              labelSelector: classes['form__sex-choose-wrapper'],
              refLink: this.male,
              otherAttributes: {
                value: 'Male',
                name: 'sex',
                defaultChecked: true,
              },
            }}
          />
          <CustomInput
            inputOptions={{
              title: 'Female',
              type: 'radio',
              inputSelector: classes['form__sex-choose-item'],
              labelSelector: classes['form__sex-choose-wrapper'],
              refLink: this.female,
              otherAttributes: {
                value: 'Female',
                name: 'sex',
              },
            }}
          />
        </div>
        <CustomInput
          inputOptions={{
            title: 'Photo',
            type: 'file',
            labelSelector: classes['form__file'],
            refLink: this.file,
            otherAttributes: {
              accept: '.jpg, .jpeg, .png',
            },
          }}
        />
        <label htmlFor="checkbox" className={classes.form__checkbox}>
          <input type="checkbox" ref={this.checkbox} />
          <p>I consent to my personal data</p>
        </label>
        <Button content={'Submit'} type="submit" />
      </form>
    );
  }
}
