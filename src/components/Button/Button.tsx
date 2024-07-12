import style from './Button.module.scss';

interface IState {
  name: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({
  name,
  className = style.button,
  onClick = () => {},
}: IState) {
  return (
    <button type="submit" className={className} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
