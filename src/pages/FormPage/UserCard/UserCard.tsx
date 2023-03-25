import React, { Component } from 'react';
import { IUserData } from '../FormPage';
import classes from './UserCard.module.scss';

interface IProps {
  userData: IUserData;
}
export default class UserCard extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <li className={classes.user}>
        <div className={classes.user__photo}>
          <img
            src={this.props.userData.file ? URL.createObjectURL(this.props.userData.file) : ''}
            alt={this.props.userData.file?.name}
            data-testid="image"
          />
        </div>
        <h3 className={classes.user__name} data-testid="name">
          <span>Name:</span> {this.props.userData.name}
        </h3>
        <p className={classes.user__date} data-testid="date">
          <span>Date:</span> {this.props.userData.date}
        </p>
        <p className={classes.user__country} data-testid="country">
          <span>Country:</span> {this.props.userData.country}
        </p>
        <p className={classes.user__sex} data-testid="sex">
          <span>Sex:</span> {this.props.userData.sex}
        </p>
      </li>
    );
  }
}
