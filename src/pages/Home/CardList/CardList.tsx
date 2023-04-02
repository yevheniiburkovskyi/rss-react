import React from 'react';
import { ICharacter } from 'service/getData';
import Card from './Card/Card';
import classes from './CardList.module.scss';

export default function CardList({ dataArr }: { dataArr: ICharacter[] }) {
  return (
    <ul className={classes.cards}>
      {dataArr?.map((item) => (
        <Card cardData={item} key={item.id} />
      ))}
    </ul>
  );
}
