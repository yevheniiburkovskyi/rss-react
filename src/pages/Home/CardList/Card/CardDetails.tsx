import React from 'react';
import { ICard } from 'service/getData';
import classes from './Card.module.scss';
interface IProps {
  cardData: ICard;
  activeClass: string;
}
export default function CardDetails(props: IProps) {
  return (
    <div className={`${classes.card__details} ${props.activeClass}`}>
      <ul className={classes['card__details-list']}>
        <li className={classes['card__details-list-rating']}>
          <span>Rating:</span> {props.cardData.rating}
        </li>
        <li className={classes['card__details-list-price']}>
          <span>Stock:</span> {props.cardData.stock}
        </li>
        <li className={classes['card__details-list-brand']}>
          <span>Brand:</span> {props.cardData.brand}
        </li>
        <li className={classes['card__details-list-category']}>
          <span>Category:</span> {props.cardData.category}
        </li>
      </ul>
      <div className={classes['card__details-descr']}>
        <h3 className={classes['card__details-descr-title']}>Description</h3>
        <p className={classes['card__details-descr-text']}>{props.cardData.description}</p>
      </div>
    </div>
  );
}
