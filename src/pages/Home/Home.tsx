import Container from '../../components/Container/Container';
import React from 'react';
import CardList from './CardList/CardList';
import classes from './Home.module.scss';
import SearchForm from '../../components/SearchForm/SearchForm';
import Loading from '../../components/Loading/Loading';
import NotFound from '../../components/NotFound/NotFound';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { useGetAllCharactersQuery } from '../../service/rickAndMortyApi';

export default function Home() {
  const searchValue = useSelector((state: RootState) => state.search.search);
  const { data, error, isFetching } = useGetAllCharactersQuery(searchValue);

  return (
    <section className={classes.home}>
      <Container>
        <SearchForm />
        {(error && <NotFound />) ||
          (isFetching && <Loading />) ||
          (data && <CardList dataArr={data.results} />)}
      </Container>
    </section>
  );
}
