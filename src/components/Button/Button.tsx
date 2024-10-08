import style from './Button.module.scss';

type ButtonType = {
  name: string;
  type: 'submit' | 'reset' | 'button';
  onClick?: (e: MouseEvent) => void;
  disabled?: boolean;
};
export default function Button({ name, type, disabled }: ButtonType) {
  return (
    <button className={style.button_wrapper} type={type} disabled={disabled}>
      {name}
    </button>
  );
}
