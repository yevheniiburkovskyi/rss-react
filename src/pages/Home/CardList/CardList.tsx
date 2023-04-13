import ModalWindow from '../../../components/ModalWindow/ModalWindow';
import React, { useState } from 'react';
import { ICharacter, useGetSingleCharacterQuery } from '../../../service/rickAndMortyApi';
import Card from './Card/Card';
import classes from './CardList.module.scss';
import CardModal from './CardModal/CardModal';
import Loading from '../../../components/Loading/Loading';

export default function CardList({ dataArr }: { dataArr: ICharacter[] }) {
  const [cardId, setCardId] = useState<string>('1');
  const { data, isFetching } = useGetSingleCharacterQuery(cardId);
  const [showModal, setShowModal] = useState(false);

  return (
    <ul className={classes.cards}>
      {dataArr?.map((item) => (
        <Card cardData={item} key={item.id} setCardId={setCardId} setModal={setShowModal} />
      ))}
      {showModal && (
        <ModalWindow setModal={setShowModal}>
          {(isFetching && <Loading />) || (data && <CardModal characterData={data} />)}
        </ModalWindow>
      )}
    </ul>
  );
}
