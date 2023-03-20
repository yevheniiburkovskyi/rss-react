import { Button } from '../../../../components/Button/Button';
import React, { Component } from 'react';
import { ICard } from 'service/getData';
import classes from './Card.module.scss';
import CardDetails from './CardDetails';
interface IProps {
  cardData: ICard;
}
interface IState {
  details: boolean;
}
export default class Card extends Component<IProps, IState> {
  constructor(props: IProps | Readonly<IProps>) {
    super(props);
    this.state = {
      details: false,
    };
  }

  sliceString(str: string) {
    if (str.length > 20) {
      return `${str.slice(0, 20)}...`;
    }
    return str;
  }

  detailsHandler() {
    this.setState({
      details: !this.state.details,
    });
  }

  render() {
    return (
      <li className={classes.card} data-testid="product-card">
        <div className={classes.card__block}>
          <img src={this.props.cardData.thumbnail} alt={this.props.cardData.title} />
          <CardDetails
            cardData={this.props.cardData}
            activeClass={this.state.details ? classes.showDetails : classes.hideDetails}
          />
        </div>
        <h3 className={classes.card__title} data-testid="product-card-title">
          {this.sliceString(this.props.cardData.title)}
        </h3>
        <p className={classes.card__price}>{`${this.props.cardData.price}$`}</p>
        <Button content={'Buy'} />
        <Button
          onClickFunc={this.detailsHandler.bind(this)}
          content={this.state.details ? 'Hide details' : 'Show details'}
        />
      </li>
    );
  }
}
