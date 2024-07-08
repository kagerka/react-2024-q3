import { PureComponent } from 'react';
import style from './Button.module.scss';

interface IState {
  name: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

class Button extends PureComponent<IState> {
  static defaultProps = { className: style.button, onClick: () => {} };

  render() {
    const { name, className, onClick } = this.props;
    return (
      <button type="submit" className={className} onClick={onClick}>
        {name}
      </button>
    );
  }
}

export default Button;
