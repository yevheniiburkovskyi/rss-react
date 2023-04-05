import Container from '../../components/Container/Container';
import React, { useEffect, useRef, useState } from 'react';
import CardList from './CardList/CardList';
import classes from './Home.module.scss';
import SearchForm from '../../components/SearchForm/SearchForm';
import getData, { ICharacter } from '../../service/getData';
import Loading from '../../components/Loading/Loading';
import NotFound from '../../components/NotFound/NotFound';

export default function Home() {
  const [storageValue, setStorageValue] = useState(localStorage.getItem('storageValue') || '');
  const [searchValue, setSearchValue] = useState<string>(storageValue);
  const [dataArr, setDataArr] = useState<ICharacter[] | undefined | null>();
  const storageValueRef = useRef<string>();

  useEffect(() => {
    storageValueRef.current = storageValue;
  }, [storageValue]);

  useEffect(() => {
    return () => {
      localStorage.setItem('storageValue', storageValueRef.current as string);
    };
  }, []);

  useEffect(() => {
    getData(searchValue).then((json) => (json ? setDataArr(json.results) : setDataArr(null)));
  }, [searchValue]);

  return (
    <section className={classes.home}>
      <Container>
        <SearchForm
          setSearchValue={setSearchValue}
          setStorageValue={setStorageValue}
          storageValue={storageValue}
        />
        {(dataArr === null && <NotFound />) ||
          (dataArr === undefined && <Loading />) ||
          (dataArr && <CardList dataArr={dataArr} />)}
      </Container>
    </section>
  );
}
