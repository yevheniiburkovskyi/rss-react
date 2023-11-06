import Container from '../../components/Container/Container';
import React, { useEffect, useState } from 'react';
import CardList from './CardList/CardList';
import classes from './Home.module.scss';
import SearchForm from '../../components/SearchForm/SearchForm';
import getData, { ICharacter } from '../../service/getData';
import Loading from '../../components/Loading/Loading';
import NotFound from '../../components/NotFound/NotFound';

export default function Home() {
  const [searchValue, setSearchValue] = useState<string>(localStorage.getItem('searchValue') || '');
  const [dataArr, setDataArr] = useState<ICharacter[] | undefined | null>();

  useEffect(() => {
    getData(searchValue).then((json) => (json ? setDataArr(json.results) : setDataArr(null)));
  }, [searchValue]);

  return (
    <section className={classes.home}>
      <Container>
        <SearchForm searchValue={searchValue} setSearchValue={setSearchValue} />
        {(dataArr === null && <NotFound />) ||
          (dataArr === undefined && <Loading />) ||
          (dataArr && <CardList dataArr={dataArr} />)}
      </Container>
    </section>
  );
}
