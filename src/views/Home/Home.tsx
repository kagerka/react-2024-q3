import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import getData from '../../services/api';

import { IAnimal, IAnimalResponse } from '../../utils/interfaces';
import Content from '../Content/Content';
import Header from '../Header/Header';

function Home() {
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem('searchValue') ?? '',
  );
  const [pageValue, setPageValue] = useState(0);

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
      .then((data: IAnimalResponse) => {
        setTotalPages(data.page.totalPages);
        return setSearchResult(data.animals);
      })
      .then(() => setIsSearching(false))
      .catch(() => {
        throw new Error('There is a problem with fetching data');
      });

    setSearchParams({ page: pageValue.toString(), name: searchValue });
    navigate(
      `/search?page=${encodeURIComponent(pageValue + 1)}&name=${encodeURIComponent(searchValue)}`,
    );
  }, [searchValue, pageValue, setSearchParams, navigate]);

  const handleParams = (page: number, search: string) => {
    setSearchParams({ page: page.toString(), name: search });
    navigate(
      `/search?page=${encodeURIComponent(page + 1)}&name=${encodeURIComponent(search)}`,
    );
  };

  const handleSubmit = (value: string) => {
    setSearchValue(value);
    setPageValue(0);
    handleParams(pageValue, value);
  };

  const handleClick = (value: number) => {
    setPageValue(value);
    handleParams(value, searchValue);
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
      />
    </>
  );
}

export default Home;
