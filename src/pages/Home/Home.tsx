import Container from '../../components/Container/Container';
import React, { useEffect, useState } from 'react';
import CardList from './CardList/CardList';
import classes from './Home.module.scss';
import SearchForm from '../../components/SearchForm/SearchForm';
import getData, { ICharacter } from '../../service/getData';
import Loading from '../../components/Loading/Loading';
import NotFound from '../../components/NotFound/NotFound';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

export default function Home() {
  const searchValue = useSelector((state: RootState) => state.search.search);
  const [dataArr, setDataArr] = useState<ICharacter[] | undefined | null>();

  useEffect(() => {
    getData(searchValue).then((json) => (json ? setDataArr(json.results) : setDataArr(null)));
  }, [searchValue]);

  return (
    <section className={classes.home}>
      <Container>
        <SearchForm />
        {(dataArr === null && <NotFound />) ||
          (dataArr === undefined && <Loading />) ||
          (dataArr && <CardList dataArr={dataArr} />)}
      </Container>
    </section>
  );
}
