import { useEffect, useState } from 'react';

import getData from '../../services/api';

import { IAnimal, IAnimalResponse } from '../../utils/interfaces';
import Content from '../Content/Content';
import Header from '../Header/Header';

function Home() {
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem('searchValue') ?? '',
  );
  const [searchResult, setSearchResult] = useState<IAnimal[]>([]);
  const [isSearching, setIsSearching] = useState(true);

  useEffect(() => {
    setIsSearching(true);
    getData(localStorage.getItem('searchValue') ?? '')
      .then((data: IAnimalResponse) => {
        return setSearchResult(data.animals);
      })
      .then(() => setIsSearching(false))
      .catch(() => {
        throw new Error('There is a problem with fetching data');
      });
  }, [searchValue]);

  const handleSubmit = (value: string) => {
    setSearchValue(value);
  };

  return (
    <>
      <Header onSubmit={handleSubmit} searchValue={searchValue} />
      <Content
        searchValue={searchValue}
        searchResult={searchResult}
        isSearching={isSearching}
      />
    </>
  );
}

export default Home;
