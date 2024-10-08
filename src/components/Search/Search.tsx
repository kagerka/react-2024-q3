import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { currentAnimalData, pageNumber, searchString } from '../../store/appSlice';
import { DEFAULT_ANIMAL } from '../../utils/constants';
import Button from '../Button/Button';
import style from './Search.module.scss';

function Search() {
  const dispatch = useDispatch();

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
