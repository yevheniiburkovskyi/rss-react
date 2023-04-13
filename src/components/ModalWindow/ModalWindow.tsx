import React from 'react';
import ReactDOM from 'react-dom';
import classes from './ModalWindow.module.scss';

export default function ModalWindow({
  setModal,
  children,
}: {
  setModal?: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}) {
  return ReactDOM.createPortal(
    <section className={classes.modal__overlay} onClick={() => setModal && setModal(false)}>
      <div className={classes.modal__window} onClick={(e) => e.stopPropagation()}>
        <span className={classes.modal__close} onClick={() => setModal && setModal(false)}>
          ✖
        </span>
        {children}
      </div>
    </section>,
    document.getElementById('overlay-root') as HTMLElement
  );
}
