import React, { Component } from 'react';
import getData, { ICard, IData } from '../../../service/getData';
import Card from './Card/Card';
import classes from './CardList.module.scss';
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
    getData()
      .then((json: IData) => this.setState({ dataArr: json.products }))
      .catch(() => null);
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
