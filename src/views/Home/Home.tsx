import { useCallback, useEffect, useState } from 'react';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';

import { useGetAnimalsQuery } from '../../services/api';
import ITEMS_PER_PAGE from '../../utils/constants';
import { IAnimal } from '../../utils/interfaces';
import Content from '../Content/Content';
import Header from '../Header/Header';

function Home() {
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem('searchValue') ?? '',
  );
  const [pageValue, setPageValue] = useState(0);
  const [currentUID, setCurrentUID] = useState('');
  const [searchResult, setSearchResult] = useState<IAnimal[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetAnimalsQuery({
    pageNumber: pageValue ?? 0,
    pageSize: ITEMS_PER_PAGE,
    searchValue: localStorage.getItem('searchValue') ?? searchValue,
  });

  useEffect(() => {
    if (data) {
      setTotalPages(data.page.totalPages);
      setSearchResult(data.animals);
    }
    if (error) console.error('There is a problem with fetching data', error);
  }, [data, error]);

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
    handleParams(pageValue, searchValue, currentUID);
  }, [
    searchValue,
    pageValue,
    setSearchParams,
    navigate,
    currentUID,
    handleParams,
  ]);

  const handleDetails = (uid: string) => {
    setCurrentUID(uid);
    handleParams(pageValue, searchValue, currentUID);
  };

  const handleSubmit = (value: string) => {
    setSearchValue(value);
    setPageValue(0);
    setCurrentUID('');
    handleParams(pageValue, value, currentUID);
  };

  const handleClick = (value: number) => {
    setPageValue(value);
    setCurrentUID('');
    handleParams(value, searchValue, currentUID);
  };

  return (
    <>
      <Header onSubmit={handleSubmit} searchValue={searchValue} />
      <Outlet />
      <Content
        searchValue={searchValue}
        searchResult={searchResult}
        isSearching={isLoading}
        totalPages={totalPages}
        onClick={handleClick}
        handleDetails={handleDetails}
      />
    </>
  );
}

export default Home;
