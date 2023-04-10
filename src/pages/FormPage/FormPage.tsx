import Container from '../../components/Container/Container';
import React from 'react';
import classes from './FormPage.module.scss';
import Form from '../../components/Form/Form';
import UserCard from './UserCard/UserCard';
import { RootState } from 'redux/store';
import { useSelector } from 'react-redux';

export interface IUserData {
  name?: string;
  date?: string;
  country?: string;
  gender?: string;
  filePath?: string;
  terms?: boolean;
}

export default function FormPage() {
  const userDataArr = useSelector((state: RootState) => state.form.registeredUsers);

  return (
    <section className={classes['form-page']}>
      <Container>
        <Form />
        <ul className={classes['form-page__users']}>
          {userDataArr.map((item, i) => (
            <UserCard userData={item} key={i} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
