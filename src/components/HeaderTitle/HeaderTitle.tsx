import { PureComponent } from 'react';
import style from './HeaderTitle.module.scss';

interface IState {
  name: string;
}

class HeaderTitle extends PureComponent<IState> {
  render() {
    const { name } = this.props;
    return <h1 className={style.title}>{name}</h1>;
  }
}

export default HeaderTitle;
