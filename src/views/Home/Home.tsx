import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
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

  useEffect(() => {
    setSearchParams({ page: pageValue.toString(), name: searchValue });
    navigate(
      `/search?page=${encodeURIComponent(pageValue + 1)}&name=${encodeURIComponent(searchValue)}${currentUID !== '' ? `&uid=${encodeURIComponent(currentUID)}` : ''}`,
    );
  }, [searchValue, pageValue, setSearchParams, navigate, currentUID]);

  const handleParams = (page: number, search: string, uid: string) => {
    setSearchParams({ page: page.toString(), name: search, uid });
    navigate(
      `/search?page=${encodeURIComponent(page + 1)}&name=${encodeURIComponent(search)}${uid !== '' ? `&uid=${encodeURIComponent(uid)}` : ''}`,
    );
  };

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
      <Content
        searchValue={searchValue}
        searchResult={searchResult}
        isSearching={isSearching}
        totalPages={totalPages}
        onClick={handleClick}
        handleDetails={handleDetails}
        animalUID={currentUID}
      />
    </>
  );
}

export default Home;
