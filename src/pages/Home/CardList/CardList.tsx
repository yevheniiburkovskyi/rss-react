import ModalWindow from '../../../components/ModalWindow/ModalWindow';
import React, { useState } from 'react';
import { ICharacter, useGetSingleCharacterQuery } from '../../../service/rickAndMortyApi';
import Card from './Card/Card';
import classes from './CardList.module.scss';
import CardModal from './CardModal/CardModal';
import Loading from '../../../components/Loading/Loading';
import NotFound from '../../../components/NotFound/NotFound';

export default function CardList({ dataArr }: { dataArr: ICharacter[] }) {
  const [cardId, setCardId] = useState('1');
  const { data, isFetching, error } = useGetSingleCharacterQuery(cardId);
  const [showModal, setShowModal] = useState(false);

  return (
    <ul className={classes.cards}>
      {dataArr.map((item) => (
        <Card cardData={item} key={item.id} setCardId={setCardId} setModal={setShowModal} />
      ))}
      {showModal && (
        <ModalWindow setModal={setShowModal}>
          {(isFetching && <Loading />) ||
            (data && <CardModal characterData={data} />) ||
            (error && <NotFound />)}
        </ModalWindow>
      )}
    </ul>
  );
}
