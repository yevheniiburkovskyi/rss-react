import React, { useState } from 'react';
import classes from './Form.module.scss';
import { Button } from '../Button/Button';
import { IUserData } from 'pages/FormPage/FormPage';
import FormModal from './FormModal/FormModal';
import { useForm } from 'react-hook-form';
import CountryInput from './Inputs/CountryInput/CountryInput';
import NameInput from './Inputs/NameInput/NameInput';
import DateInput from './Inputs/DateInput/DateInput';
import FileInput from './Inputs/FileInput/FileInput';
import TermsInput from './Inputs/TermsInput/TermsInput';
import GenderInput from './Inputs/GenderInput/GenderInput';

interface IProps {
  updateArr: (user: IUserData) => void;
}

export interface IRegister {
  name?: string;
  date?: string;
  country?: string;
  gender?: string;
  file?: FileList;
  terms?: boolean;
}

export default function Form(props: IProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IRegister>({ reValidateMode: 'onSubmit' });

  const [showModal, setShowModal] = useState(false);

  function onSubmit(data: IRegister) {
    props.updateArr({ ...data, file: data.file?.[0] });
    handleModal();
    reset();
  }

  function handleModal() {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 1000);
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <NameInput register={register} error={errors.name} />
      <DateInput register={register} error={errors.date} />
      <CountryInput register={register} error={errors.country} />
      <div className={classes.form__gender}>
        <GenderInput register={register} value={'Male'} />
        <GenderInput register={register} value={'Female'} />
      </div>
      <p className={classes.form__error}>{errors.gender && errors.gender.message}</p>
      <FileInput register={register} error={errors.file} />
      <TermsInput register={register} error={errors.terms} />
      <Button content={'Submit'} type="submit" />
      {showModal && <FormModal />}
    </form>
  );
}
