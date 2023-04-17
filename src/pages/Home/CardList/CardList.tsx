import ModalWindow from '../../../components/ModalWindow/ModalWindow';
import React, { useEffect, useState } from 'react';
import { ICharacter } from '../../../service/rickAndMortyApi';
import Card from './Card/Card';
import classes from './CardList.module.scss';
import CardModal from './CardModal/CardModal';
import Loading from '../../../components/Loading/Loading';
import NotFound from '../../../components/NotFound/NotFound';
import { AppDispatch, RootState } from 'redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacterDetails } from '../../../redux/detailsSlice';

export default function CardList({ dataArr }: { dataArr: ICharacter[] }) {
  const [cardId, setCardId] = useState('1');
  const { data, status } = useSelector((state: RootState) => state.details);
  const dispatch = useDispatch<AppDispatch>();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchCharacterDetails(cardId));
  }, [cardId, dispatch]);

  return (
    <ul className={classes.cards}>
      {dataArr.map((item) => (
        <Card cardData={item} key={item.id} setCardId={setCardId} setModal={setShowModal} />
      ))}
      {showModal && (
        <ModalWindow setModal={setShowModal}>
          {(status === 'pending' && <Loading />) ||
            (status === 'succeeded' && data && <CardModal characterData={data} />) ||
            (status === 'failed' && <NotFound />)}
        </ModalWindow>
      )}
    </ul>
  );
}
