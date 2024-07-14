import { useCallback, useEffect, useState } from 'react';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import { getData } from '../../services/api';

import { IAnimal, IAnimalsResponse } from '../../utils/interfaces';
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
  const [isSearching, setIsSearching] = useState(true);

  const [, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    setIsSearching(true);
    getData(localStorage.getItem('searchValue') ?? searchValue, {
      number: pageValue,
      size: 12,
    })
      .then((data: IAnimalsResponse) => {
        setTotalPages(data.page.totalPages);
        return setSearchResult(data.animals);
      })
      .then(() => setIsSearching(false))
      .catch(() => {
        throw new Error('There is a problem with fetching data');
      });
  }, [searchValue, pageValue]);

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
        isSearching={isSearching}
        totalPages={totalPages}
        onClick={handleClick}
        handleDetails={handleDetails}
      />
    </>
  );
}

export default Home;
