import Container from '../../components/Container/Container';
import React, { useEffect, useState } from 'react';
import CardList from './CardList/CardList';
import classes from './Home.module.scss';
import SearchForm from '../../components/SearchForm/SearchForm';

export default function Home() {
  const [inputValue, setInputValue] = useState<string>(localStorage.getItem('searchValue') || '');

  useEffect(() => {
    localStorage.removeItem('searchValue');
    return () => {
      localStorage.setItem('searchValue', inputValue);
    };
  }, [inputValue]);

  return (
    <section className={classes.home}>
      <Container>
        <SearchForm inputValue={inputValue} setInputValue={setInputValue} />
        <CardList searchValue={inputValue} />
      </Container>
    </section>
  );
}
