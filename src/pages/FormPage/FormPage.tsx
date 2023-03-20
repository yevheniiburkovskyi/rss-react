import Container from '../../components/Container/Container';
import React, { Component } from 'react';
import classes from './FormPage.module.scss';
import Form from '../../components/Form/Form';

export default class FormPage extends Component {
  render() {
    return (
      <section className={classes.form__page}>
        <Container>
          <Form />
        </Container>
      </section>
    );
  }
}
