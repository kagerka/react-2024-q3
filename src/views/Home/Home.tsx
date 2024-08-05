import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FlyoutElement from '../../components/FlyoutElement/FlyoutElement';
import { useGetAnimalsQuery } from '../../services/api';
import { loading, searchResult, totalPages } from '../../store/appSlice';
import { RootState } from '../../store/store';
import { ITEMS_PER_PAGE } from '../../utils/constants';
import Content from '../Content/Content';
import Header from '../Header/Header';

function Home() {
  const dispatch = useDispatch();

  const pageNumber = useSelector((store: RootState) => store.app.pageNumber);
  const currentAnimal = useSelector((store: RootState) => store.app.currentAnimalData);
  const searchString = useSelector((store: RootState) => store.app.searchString);

  const { data, error, isFetching } = useGetAnimalsQuery({
    pageNumber: pageNumber ?? 0,
    pageSize: ITEMS_PER_PAGE,
    searchValue: searchString,
  });

  useEffect(() => {
    if (data) {
      dispatch(totalPages(data.page.totalPages));
      dispatch(searchResult(data.animals));
    }
    if (error) console.error('There is a problem with fetching data', error);
  }, [data, error, searchString, dispatch]);

  useEffect(() => {
    dispatch(loading(isFetching));
  }, [currentAnimal.uid, dispatch, isFetching, pageNumber, searchString]);

  return (
    <>
      <Header />
      <Content />
      <FlyoutElement />
    </>
  );
}

export default Home;
