import { Button } from '../Button/Button';
import React, { Component, FormEvent } from 'react';
import classes from './Form.module.scss';
import { IUserData } from 'pages/FormPage/FormPage';
import CustomInput from './CustomInput/CustomInput';

interface IProps {
  updateArr: (user: IUserData) => void;
}
interface IState {
  validation: IValidation;
}

interface IValidation {
  nameValid: boolean;
  dateValid: boolean;
  countryValid: boolean;
  checkboxValid: boolean;
  fileValid: boolean;
}

export default class Form extends Component<IProps, IState> {
  form: React.RefObject<HTMLFormElement>;
  id: number;
  name: React.RefObject<HTMLInputElement>;
  date: React.RefObject<HTMLInputElement>;
  country: React.RefObject<HTMLSelectElement>;
  checkbox: React.RefObject<HTMLInputElement>;
  male: React.RefObject<HTMLInputElement>;
  female: React.RefObject<HTMLInputElement>;
  file: React.RefObject<HTMLInputElement>;

  constructor(props: IProps) {
    super(props);
    this.state = {
      validation: {
        nameValid: true,
        dateValid: true,
        countryValid: true,
        checkboxValid: true,
        fileValid: true,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.form = React.createRef();
    this.id = 1;
    this.name = React.createRef();
    this.date = React.createRef();
    this.country = React.createRef();
    this.male = React.createRef();
    this.female = React.createRef();
    this.file = React.createRef();
    this.checkbox = React.createRef();
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const userObj = {
      id: this.id++,
      name: this.name.current?.value,
      date: this.date.current?.value,
      country: this.country.current?.value,
      sex: this.male.current?.checked ? this.male.current.value : this.female.current?.value,
      file: this.file.current?.files ? this.file.current?.files[0] : undefined,
      checkbox: this.checkbox.current?.checked,
    };
    if (this.checkValidation(userObj)) {
      this.props.updateArr(userObj);
    }
  }

  checkValidation(user: IUserData) {
    const newValidationObj = { ...this.state.validation };
    for (const key in newValidationObj) {
      if (!user[key.replace(/Valid/i, '') as keyof IUserData]) {
        newValidationObj[key as keyof IValidation] = false;
      } else {
        newValidationObj[key as keyof IValidation] = true;
      }
    }
    this.setState({ validation: { ...newValidationObj } });
    const validationResults = Object.values(newValidationObj);
    if (validationResults.every((item) => item === true)) {
      this.form.current?.reset();
      return true;
    }
    return false;
  }

  render() {
    return (
      <form className={classes.form} onSubmit={this.handleSubmit} ref={this.form}>
        <CustomInput
          inputOptions={{
            title: 'Name',
            type: 'name',
            inputSelector: classes.form__input,
            refLink: this.name,
          }}
          valid={this.state.validation.nameValid}
        />
        <CustomInput
          inputOptions={{
            title: 'Date',
            type: 'date',
            inputSelector: classes.form__date,
            refLink: this.date,
          }}
          valid={this.state.validation.dateValid}
        />
        <label>
          <p>Country</p>
          <select name="select" ref={this.country} className={classes.form__select}>
            <option value="">--Select Country--</option>
            <option value="Ukraine">Ukraine</option>
            <option value="Poland">Poland</option>
            <option value="France">France</option>
          </select>
          <p className={classes.invalid}>
            {this.state.validation.countryValid ? '' : 'Invalid Country'}
          </p>
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
              accept: '.jpg, .jpeg, .png, .webp',
            },
          }}
          valid={this.state.validation.fileValid}
        />
        <label htmlFor="form-checkbox" className={classes.form__checkbox}>
          <input type="checkbox" ref={this.checkbox} id="form-checkbox" />
          <p className={this.state.validation.checkboxValid ? '' : classes.invalid}>
            I consent to my personal data
          </p>
        </label>
        <Button content={'Submit'} type="submit" />
      </form>
    );
  }
}
