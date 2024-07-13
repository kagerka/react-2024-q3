import Search from '../../components/Search/Search';
import style from './Header.module.scss';

interface IProps {
  onSubmit: (value: string) => void;
  searchValue: string;
}

function Header(props: IProps) {
  const { onSubmit, searchValue } = props;
  return (
    <div className={style.wrapper}>
      <Search
        placeholder="Search..."
        searchValue={searchValue}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default Header;
