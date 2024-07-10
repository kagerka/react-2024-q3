import { useState } from 'react';
import Search from '../../components/Search/Search';
import style from './Header.module.scss';

export interface IProps {
  onSubmit: (value: string) => void;
}

function Header(props: IProps) {
  const { onSubmit } = props;
  const [searchValue, setSearchValue] = useState('');
  const handleSubmit = (value: string) => {
    setSearchValue(value);
  };
  onSubmit(searchValue);
  return (
    <div className={style.wrapper}>
      <Search
        placeholder="Search..."
        searchValue={localStorage.getItem('searchValue') ?? ''}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default Header;
