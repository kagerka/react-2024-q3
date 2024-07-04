import { PureComponent } from 'react';
import Button from '../Button/Button';
import style from './Input.module.scss';

interface IState {
  placeholder: string;
}

class Input extends PureComponent<IState> {
  render() {
    const { placeholder } = this.props;
    return (
      <form className={style.form}>
        <input className={style.input} placeholder={placeholder} />
        <Button name="Submit" />
      </form>
    );
  }
}

export default Input;
