import React, { FormEvent, SetStateAction, useRef } from 'react';
import classes from './SearchForm.module.scss';
import searchIcon from '../../assets/search.svg';

export default function SearchForm({
  searchValue,
  setSearchValue,
}: {
  searchValue: string;
  setSearchValue: React.Dispatch<SetStateAction<string>>;
}) {
  const searchInput = useRef<HTMLInputElement>(null);

  function submitHander(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (searchInput.current) {
      localStorage.setItem('searchValue', searchInput.current.value);
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
          defaultValue={searchValue}
        />
        <button className={classes.search__button} type="submit">
          <img src={searchIcon} alt="search" />
        </button>
      </form>
    </section>
  );
}
