import React, { Component } from 'react';
import { ICard } from 'service/getData';
import classes from './Card.module.scss';
interface IProps {
  cardData: ICard;
}
export default class Card extends Component<IProps> {
  constructor(props: IProps | Readonly<IProps>) {
    super(props);
  }

  sliceString(str: string) {
    if (str.length > 20) {
      return `${str.slice(0, 20)}...`;
    }
    return str;
  }

  render() {
    return (
      <li className={classes.card} data-testid="product-card">
        <div className={classes.card__img}>
          <img src={this.props.cardData.thumbnail} alt={this.props.cardData.title} />
        </div>
        <h3 className={classes.card__title} data-testid="product-card-title">
          {this.sliceString(this.props.cardData.title)}
        </h3>
        <p className={classes.card__price}>{`${this.props.cardData.price}$`}</p>
        <button className={classes.card__buy}>Buy</button>
        <button className={classes.card__details}>Details</button>
      </li>
    );
  }
}
