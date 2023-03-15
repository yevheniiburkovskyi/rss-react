import React, { Component } from 'react';
import Card from './Card/Card';
import classes from './CardList.module.scss';
export interface ICard {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
interface IState {
  dataArr: undefined | ICard[];
}

export default class CardList extends Component<object, IState> {
  constructor(props: object) {
    super(props);
    this.state = {
      dataArr: undefined,
    };
  }

  componentWillMount() {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => this.setState({ dataArr: json }));
  }

  renderList() {
    if (this.state.dataArr) {
      return (
        <ul className={classes.cards}>
          {this.state.dataArr.map((cardItem) => (
            <Card key={cardItem.id} cardData={cardItem} />
          ))}
        </ul>
      );
    }
    return <div className={classes.loading}>Loading...</div>;
  }

  render() {
    return this.renderList();
  }
}
