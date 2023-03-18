import React, { Component } from 'react';
import Card from './Card/Card';
import classes from './CardList.module.scss';
export interface ICard {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface IData {
  limit: number;
  products: ICard[];
  skip: number;
  total: number;
}
interface IState {
  dataArr: undefined | ICard[];
}
interface IProps {
  searchValue: string;
}

export default class CardList extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      dataArr: undefined,
    };
  }

  componentDidMount() {
    fetch('https://dummyjson.com/products?limit=30&skip=10')
      .then((res) => res.json())
      .then((json: IData) => this.setState({ dataArr: json.products }))
      .catch(() => console.error());
  }

  cardFilter(cardItem: ICard, patternStr: string) {
    const pattern = new RegExp(`^${patternStr}`, 'ig');
    if (cardItem.title.match(pattern)) {
      return <Card key={cardItem.id} cardData={cardItem} />;
    }
  }

  renderList() {
    if (this.state.dataArr) {
      return (
        <ul className={classes.cards}>
          {this.state.dataArr.map((cardItem) => this.cardFilter(cardItem, this.props.searchValue))}
        </ul>
      );
    }
    return <div className={classes.loading}>Loading...</div>;
  }

  render() {
    return this.renderList();
  }
}
