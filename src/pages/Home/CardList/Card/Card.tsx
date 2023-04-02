import React from 'react';
import { ICharacter } from 'service/getData';
import classes from './Card.module.scss';

export default function Card({ cardData }: { cardData: ICharacter }) {
  return (
    <li className={classes.card} data-testid="product-card">
      <div className={classes.card__block}>
        <img src={cardData.image} alt={cardData.name} />
      </div>
      <h3 className={classes.card__title} data-testid="product-card-title">
        {cardData.name}
      </h3>
    </li>
  );
}
