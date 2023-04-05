import ModalWindow from '../../../components/ModalWindow/ModalWindow';
import React, { useEffect, useState } from 'react';
import { getCharacter, ICharacter } from '../../../service/getData';
import Card from './Card/Card';
import classes from './CardList.module.scss';
import CardModal from './CardModal/CardModal';

export default function CardList({ dataArr }: { dataArr: ICharacter[] }) {
  const [cardId, setCardId] = useState<string | null>(null);
  const [characterData, setCharacterData] = useState<ICharacter | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (cardId) {
      getCharacter(cardId).then((res) => {
        setCharacterData(res);
      });
    }
  }, [cardId]);

  return (
    <ul className={classes.cards}>
      {dataArr?.map((item) => (
        <Card cardData={item} key={item.id} setCardId={setCardId} setModal={setShowModal} />
      ))}
      {showModal && (
        <ModalWindow setModal={setShowModal}>
          <CardModal characterData={characterData} />
        </ModalWindow>
      )}
    </ul>
  );
}
