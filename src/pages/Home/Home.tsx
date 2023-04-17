import Container from '../../components/Container/Container';
import React, { useEffect } from 'react';
import CardList from './CardList/CardList';
import classes from './Home.module.scss';
import SearchForm from '../../components/SearchForm/SearchForm';
import Loading from '../../components/Loading/Loading';
import NotFound from '../../components/NotFound/NotFound';
import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../../redux/searchSlice';
import { AppDispatch } from '../../redux/store';

export default function Home() {
  const { search, results, status } = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCharacters(search));
  }, [search, dispatch]);
  return (
    <section className={classes.home}>
      <Container>
        <SearchForm />
        {(status === 'failed' && <NotFound />) ||
          (status === 'pending' && <Loading />) ||
          (status === 'succeeded' && <CardList dataArr={results} />)}
      </Container>
    </section>
  );
}
