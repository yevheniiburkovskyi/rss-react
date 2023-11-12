import Container from '../../components/Container/Container';
import React, { useEffect, useRef, useState } from 'react';
import CardList from './CardList/CardList';
import classes from './Home.module.scss';
import SearchForm from '../../components/SearchForm/SearchForm';

export default function Home() {
  const [inputValue, setInputValue] = useState<string>(localStorage.getItem('searchValue') || '');
  const valueRef = useRef<string>();

  useEffect(() => {
    valueRef.current = inputValue;
  }, [inputValue]);

  useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', valueRef.current as string);
    };
  }, []);

  return (
    <section className={classes.home}>
      <Container>
        <SearchForm inputValue={inputValue} setInputValue={setInputValue} />
        <CardList searchValue={inputValue} />
      </Container>
    </section>
  );
}
