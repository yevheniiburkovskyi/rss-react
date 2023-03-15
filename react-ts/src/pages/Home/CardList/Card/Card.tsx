import React, { Component } from 'react';
import { ICard } from '../CardList';
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
      <li className={classes.card}>
        <div className={classes.card__img}>
          <img src={this.props.cardData.image} alt={this.props.cardData.title} />
        </div>
        <h3 className={classes.card__title}>{this.sliceString(this.props.cardData.title)}</h3>
        <p className={classes.card__price}>{`${this.props.cardData.price}$`}</p>
        <button className={classes.card__buy}>Buy</button>
        <button className={classes.card__details}>Details</button>
      </li>
    );
  }
}
