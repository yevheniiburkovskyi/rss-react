import React, { Component, FormEvent } from 'react';
import classes from './Form.module.scss';
import { Button } from '../Button/Button';
import { IUserData } from 'pages/FormPage/FormPage';
import SelectInput from './SelectInput/SelectInput';
import NameInput from './NameInput/NameInput';
import DateInput from './DateInput/DateInput';
import RadioInput from './RadioInput/RadioInput';
import FileInput from './FileInput/FileInput';
import CheckBoxInput from './CheckBoxInput/CheckBoxInput';
import Validator from '../../service/formValidation';
import FormModal from './FormModal/FormModal';

interface IProps {
  updateArr: (user: IUserData) => void;
}
interface IState {
  showModal: boolean;
  validation: IValidation;
}

interface IValidation {
  nameValid: boolean;
  dateValid: boolean;
  countryValid: boolean;
  fileValid: boolean;
  checkboxValid: boolean;
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
      showModal: false,
      validation: {
        nameValid: true,
        dateValid: true,
        countryValid: true,
        fileValid: true,
        checkboxValid: true,
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
    const validator = new Validator();
    const userObj = {
      id: this.id++,
      name: validator.checkName(this.name.current?.value),
      date: validator.checkDate(this.date.current?.value),
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
      this.handleModal();
      return true;
    }
    return false;
  }

  handleModal() {
    this.setState({ showModal: true });
    setTimeout(() => {
      this.setState({ showModal: false });
    }, 1000);
  }

  render() {
    return (
      <form className={classes.form} onSubmit={this.handleSubmit} ref={this.form}>
        <NameInput refLink={this.name} validStatus={this.state.validation.nameValid} />
        <DateInput refLink={this.date} validStatus={this.state.validation.dateValid} />
        <SelectInput refLink={this.country} validStatus={this.state.validation.countryValid} />
        <div className={classes.form__sex}>
          <RadioInput refLink={this.male} value={'Male'} defaultCheckedStatus={true} />
          <RadioInput refLink={this.female} value={'Female'} />
        </div>
        <FileInput refLink={this.file} validStatus={this.state.validation.fileValid} />
        <CheckBoxInput refLink={this.checkbox} validStatus={this.state.validation.checkboxValid} />
        <Button content={'Submit'} type="submit" />
        {this.state.showModal ? <FormModal /> : null}
      </form>
    );
  }
}
