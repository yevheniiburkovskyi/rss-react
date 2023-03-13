import Container from '../../components/Container/Container';
import React, { Component } from 'react';
import classes from './AboutUs.module.scss';
export default class AboutUs extends Component {
  render() {
    return (
      <section className={classes.about}>
        <Container>
          <h2 className={classes.about__title}>About us</h2>
          <p className={classes.about__descr}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quae ut, incidunt
            omnis provident dicta aperiam nam expedita alias tempore, iure inventore quo. Voluptas
            facere, eum reiciendis ea neque delectus aperiam voluptate? Debitis animi expedita quod
            enim modi tempore quidem cupiditate? Autem, cumque provident perferendis repudiandae
            distinctio sunt? Saepe, quo!.
          </p>
        </Container>
      </section>
    );
  }
}
