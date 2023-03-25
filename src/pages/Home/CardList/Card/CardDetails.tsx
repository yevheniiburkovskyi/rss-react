import React, { Component } from 'react';
import { ICard } from 'service/getData';
import classes from './Card.module.scss';
interface IProps {
  cardData: ICard;
  activeClass: string;
}
export default class CardDetails extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <div className={`${classes.card__details} ${this.props.activeClass}`}>
        <ul className={classes['card__details-list']}>
          <li className={classes['card__details-list-rating']}>
            <span>Rating:</span> {this.props.cardData.rating}
          </li>
          <li className={classes['card__details-list-price']}>
            <span>Stock:</span> {this.props.cardData.stock}
          </li>
          <li className={classes['card__details-list-brand']}>
            <span>Brand:</span> {this.props.cardData.brand}
          </li>
          <li className={classes['card__details-list-category']}>
            <span>Category:</span> {this.props.cardData.category}
          </li>
        </ul>
        <div className={classes['card__details-descr']}>
          <h3 className={classes['card__details-descr-title']}>Description</h3>
          <p className={classes['card__details-descr-text']}>{this.props.cardData.description}</p>
        </div>
      </div>
    );
  }
}
