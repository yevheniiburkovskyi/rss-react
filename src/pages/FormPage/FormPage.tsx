import Container from '../../components/Container/Container';
import React, { useState } from 'react';
import classes from './FormPage.module.scss';
import Form from '../../components/Form/Form';
import UserCard from './UserCard/UserCard';

export interface IUserData {
  name?: string;
  date?: string;
  country?: string;
  gender?: string;
  file?: File;
  terms?: boolean;
}

export default function FormPage() {
  const [userDataArr, setUserDataArr] = useState<IUserData[]>([]);

  function updateArr(user: IUserData) {
    setUserDataArr([...userDataArr, user]);
  }

  return (
    <section className={classes['form-page']}>
      <Container>
        <Form updateArr={updateArr} />
        <ul className={classes['form-page__users']}>
          {userDataArr.map((item, i) => (
            <UserCard userData={item} key={i} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
