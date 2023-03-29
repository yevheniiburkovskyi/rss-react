import React from 'react';
import { IUserData } from '../FormPage';
import classes from './UserCard.module.scss';

interface IProps {
  userData: IUserData;
}

export default function UserCard(props: IProps) {
  return (
    <li className={classes.user}>
      <div className={classes.user__photo}>
        <img
          src={props.userData.file ? URL.createObjectURL(props.userData.file) : ''}
          alt={props.userData.file?.name}
          data-testid="image"
        />
      </div>
      <h3 className={classes.user__name} data-testid="name">
        <span>Name:</span> {props.userData.name}
      </h3>
      <p className={classes.user__date} data-testid="date">
        <span>Date:</span> {props.userData.date}
      </p>
      <p className={classes.user__country} data-testid="country">
        <span>Country:</span> {props.userData.country}
      </p>
      <p className={classes.user__sex} data-testid="sex">
        <span>Gender:</span> {props.userData.gender}
      </p>
    </li>
  );
}
