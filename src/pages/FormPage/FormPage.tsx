import Container from '../../components/Container/Container';
import React, { Component } from 'react';
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
interface IState {
  userDataArr: IUserData[];
}
export default class FormPage extends Component<object, IState> {
  constructor(props: object) {
    super(props);
    this.state = {
      userDataArr: [],
    };
  }

  updateArr(user: IUserData) {
    this.setState({ userDataArr: [...this.state.userDataArr, user] });
  }

  render() {
    return (
      <section className={classes['form-page']}>
        <Container>
          <Form updateArr={this.updateArr.bind(this)} />
          <ul className={classes['form-page__users']}>
            {this.state.userDataArr.map((item) => (
              <UserCard userData={item} key={item.id} />
            ))}
          </ul>
        </Container>
      </section>
    );
  }
}
