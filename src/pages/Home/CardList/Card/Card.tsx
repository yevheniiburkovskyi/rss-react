import { Button } from '../../../../components/Button/Button';
import React, { useState } from 'react';
import { ICard } from 'service/getData';
import classes from './Card.module.scss';
import CardDetails from './CardDetails';

export default function Card({ cardData }: { cardData: ICard }) {
  const [details, setDetailsStatus] = useState<boolean>(false);

  function sliceString(str: string) {
    if (str.length > 20) {
      return `${str.slice(0, 20)}...`;
    }
    return str;
  }

  function detailsHandler() {
    setDetailsStatus((prev) => !prev);
  }

  return (
    <li className={classes.card} data-testid="product-card">
      <div className={classes.card__block}>
        <img src={cardData.thumbnail} alt={cardData.title} />
        <CardDetails
          cardData={cardData}
          activeClass={details ? classes.showDetails : classes.hideDetails}
        />
      </div>
      <h3 className={classes.card__title} data-testid="product-card-title">
        {sliceString(cardData.title)}
      </h3>
      <p className={classes.card__price}>{`${cardData.price}$`}</p>
      <Button content={'Buy'} />
      <Button onClickFunc={detailsHandler} content={details ? 'Hide details' : 'Show details'} />
    </li>
  );
}
