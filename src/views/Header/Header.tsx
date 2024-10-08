import Search from '../../components/Search/Search';
import ThemeSelector from '../../components/ThemeSelector/ThemeSelector';
import style from './Header.module.scss';

function Header() {
  return (
    <div className={style.wrapper}>
      <Search />
      <ThemeSelector />
    </div>
  );
}

export default Header;
