import Container from '../../components/Container/Container';
import React, { useState } from 'react';
import classes from './FormPage.module.scss';
import Form from '../../components/Form/Form';
import UserCard from './UserCard/UserCard';

export interface IUserData {
  id: number;
  name?: string;
  date?: string;
  country?: string;
  sex?: string;
  checkbox?: boolean;
  file?: File;
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
          {userDataArr.map((item) => (
            <UserCard userData={item} key={item.id} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
