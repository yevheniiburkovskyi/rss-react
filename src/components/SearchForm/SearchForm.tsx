import React, { FormEvent, useRef } from 'react';
import classes from './SearchForm.module.scss';
import searchIcon from '../../assets/search.svg';

export default function SearchForm({
  setSearchValue,
  setStorageValue,
  storageValue,
}: {
  storageValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setStorageValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  const searchInput = useRef<HTMLInputElement>(null);

  function submitHander(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (searchInput.current) {
      setSearchValue(searchInput.current.value);
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
          role="search"
          onChange={(e) => setStorageValue(e.target.value)}
          value={storageValue}
        />
        <button className={classes.search__button} type="submit">
          <img src={searchIcon} alt="search" />
        </button>
      </form>
    </section>
  );
}
