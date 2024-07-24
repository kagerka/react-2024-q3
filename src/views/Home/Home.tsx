import { useCallback, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useGetAnimalsQuery } from '../../services/api';
import { loading, searchResult, totalPages } from '../../store/appSlice';
import { RootState } from '../../store/store';
import { ITEMS_PER_PAGE } from '../../utils/constants';
import Content from '../Content/Content';
import Header from '../Header/Header';

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const pageNumber = useSelector((store: RootState) => store.app.pageNumber);
  const currentAnimal = useSelector((store: RootState) => store.app.currentAnimalData);
  const searchString = useSelector((store: RootState) => store.app.searchString);
  const [, setSearchParams] = useSearchParams();

  const { data, error, isFetching } = useGetAnimalsQuery({
    pageNumber: pageNumber ?? 0,
    pageSize: ITEMS_PER_PAGE,
    searchValue: localStorage.getItem('searchValue') ?? searchString,
  });

  useEffect(() => {
    if (data) {
      dispatch(totalPages(data.page.totalPages));
      dispatch(searchResult(data.animals));
    }
    if (error) console.error('There is a problem with fetching data', error);
  }, [data, error, searchString, dispatch]);

  const handleParams = useCallback(
    (page: number, search: string, uid: string) => {
      setSearchParams({ page: page.toString(), name: search, uid });
      navigate(
        `/search?page=${encodeURIComponent(page + 1)}${search !== '' ? `&name=${encodeURIComponent(search)}` : ''}${uid !== '' ? `&uid=${encodeURIComponent(uid)}` : ''}`,
      );
    },
    [navigate, setSearchParams],
  );

  useEffect(() => {
    handleParams(pageNumber, searchString, currentAnimal.uid);
    dispatch(loading(isFetching));
  }, [
    setSearchParams,
    navigate,
    currentAnimal.uid,
    handleParams,
    dispatch,
    isFetching,
    pageNumber,
    searchString,
  ]);

  return (
    <>
      <Header />
      <Content />
    </>
  );
}

export default Home;
