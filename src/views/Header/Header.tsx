import { PureComponent } from 'react';
import Input from '../../components/Input/Search';
import style from './Header.module.scss';

class Header extends PureComponent {
  render() {
    return (
      <div className={style.wrapper}>
        <Input
          placeholder="Search..."
          value={localStorage.getItem('searchValue') ?? ''}
        />
      </div>
    );
  }
}

export default Header;
