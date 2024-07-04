import { PureComponent } from 'react';
import style from './Button.module.scss';

interface IState {
  name: string;
}

class Button extends PureComponent<IState> {
  render() {
    const { name } = this.props;
    return (
      <button type="submit" className={style.button}>
        {name}
      </button>
    );
  }
}

export default Button;
