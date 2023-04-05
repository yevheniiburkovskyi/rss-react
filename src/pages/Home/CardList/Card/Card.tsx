import React, { MouseEvent } from 'react';
import { ICharacter } from '../../../../service/getData';
import classes from './Card.module.scss';

export default function Card({
  cardData,
  setCardId,
  setModal,
}: {
  cardData: ICharacter;
  setCardId: React.Dispatch<React.SetStateAction<string | null>>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  function handleClick(event: MouseEvent<HTMLLIElement>) {
    setCardId(event.currentTarget.id);
    setModal(true);
  }

  return (
    <li
      className={classes.card}
      data-testid="product-card"
      onClick={handleClick}
      id={`${cardData.id}`}
    >
      <div className={classes.card__block}>
        <img src={cardData.image} alt={cardData.name} />
      </div>
      <h3 className={classes.card__title} data-testid="product-card-title">
        {cardData.name}
      </h3>
    </li>
  );
}
