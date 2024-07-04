import { PureComponent } from 'react';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import Input from '../../components/Input/Input';
import style from './Header.module.scss';

class Header extends PureComponent {
  render() {
    return (
      <div className={style.wrapper}>
        <Input placeholder="Search..." />
        <HeaderTitle name="Class components" />
      </div>
    );
  }
}

export default Header;
