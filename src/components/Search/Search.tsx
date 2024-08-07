import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  currentAnimalData,
  pageNumber,
  searchString,
} from '../../store/appSlice';
import { RootState } from '../../store/store';
import { DEFAULT_ANIMAL } from '../../utils/constants';
import Button from '../Button/Button';
import style from './Search.module.scss';

function Search() {
  const dispatch = useDispatch();

  const router = useRouter();
  const page = useSelector((store: RootState) => store.app.pageNumber);

  const [valueState, setValueState] = useState('');

  useEffect(() => {
    setValueState(localStorage.getItem('searchValue')!);
  }, []);

  const handleChange = (e: React.FormEvent) => {
    const { value } = e.target as HTMLInputElement;
    setValueState(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('searchValue', valueState);
    dispatch(searchString(valueState));
    dispatch(pageNumber(0));
    dispatch(currentAnimalData(DEFAULT_ANIMAL));

    router.replace(
      `/search?page=${page + 1}${valueState !== '' ? `&name=${valueState}` : ''}`,
    );
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <input
        type="text"
        className={style.input}
        placeholder="Search..."
        onChange={handleChange}
        value={valueState || ''}
      />
      <Button name="Submit" />
    </form>
  );
}

export default Search;
