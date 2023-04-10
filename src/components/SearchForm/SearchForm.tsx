import React, { FormEvent, useRef } from 'react';
import classes from './SearchForm.module.scss';
import searchIcon from '../../assets/search.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setSearch } from '../../redux/searchSlice';

export default function SearchForm() {
  const searchValue = useSelector((state: RootState) => state.search.search);
  const dispatch = useDispatch();

  const searchInput = useRef<HTMLInputElement>(null);

  function submitHander(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (searchInput.current) {
      dispatch(setSearch(searchInput.current.value));
    }
  }
  return (
    <section className={classes.search}>
      <form className={classes.search__form} onSubmit={submitHander}>
        <input
          type="text"
          className={classes.search__input}
          placeholder="Put character name..."
          ref={searchInput}
          defaultValue={searchValue}
        />
        <button className={classes.search__button} type="submit">
          <img src={searchIcon} alt="search" />
        </button>
      </form>
    </section>
  );
}
