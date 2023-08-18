import React from 'react';
import { ICharacter } from '../../../../service/rickAndMortyApi';
import classes from './CardModal.module.scss';

export default function CardModal({ characterData }: { characterData: ICharacter }) {
  return (
    <div className={classes.item}>
      <h3 className={classes.item__name}>{characterData?.name}</h3>
      <div className={classes.item__divider}></div>
      <p className={classes.item__species}>
        <span>Species:</span> {characterData?.species}
      </p>
      <div className={classes.item__divider}></div>
      <p className={classes.item__status}>
        <span>Status:</span> {characterData?.status}
      </p>
      <div className={classes.item__divider}></div>
      <p className={classes.item__location}>
        <span>Location:</span> {characterData?.location.name}
      </p>
    </div>
  );
}
