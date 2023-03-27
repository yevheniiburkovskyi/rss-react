import React, { useEffect, useState } from 'react';
import getData, { ICard, IData } from '../../../service/getData';
import Card from './Card/Card';
import classes from './CardList.module.scss';

interface IProps {
  searchValue: string;
}

export default function CardList(props: IProps) {
  const [dataArr, setDataArr] = useState<ICard[] | undefined>();

  useEffect(() => {
    getData()
      .then((json: IData) => setDataArr(json.products))
      .catch(() => null);
  }, []);

  function cardFilter(cardItem: ICard, patternStr: string) {
    const pattern = new RegExp(`^${patternStr}`, 'ig');
    if (cardItem.title.match(pattern)) {
      return <Card key={cardItem.id} cardData={cardItem} />;
    }
  }

  function renderList() {
    if (dataArr) {
      return (
        <ul className={classes.cards}>
          {dataArr.map((cardItem) => cardFilter(cardItem, props.searchValue))}
        </ul>
      );
    }
    return <div className={classes.loading}>Loading...</div>;
  }

  return renderList();
}
