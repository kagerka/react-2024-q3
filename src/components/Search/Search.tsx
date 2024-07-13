import React, { useState } from 'react';
import Button from '../Button/Button';
import style from './Search.module.scss';

interface IProps {
  placeholder: string;
  searchValue: string;
  onSubmit: (value: string) => void;
}

function Search(props: IProps) {
  const { placeholder, searchValue, onSubmit } = props;
  const [valueState, setValueState] = useState(searchValue);

  const handleChange = (e: React.FormEvent) => {
    const { value } = e.target as HTMLInputElement;
    setValueState(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('searchValue', valueState);
    onSubmit(valueState);
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <input
        type="text"
        className={style.input}
        placeholder={placeholder}
        onChange={handleChange}
        value={valueState}
      />
      <Button name="Submit" />
    </form>
  );
}

export default Search;
