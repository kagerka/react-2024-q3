import style from './Button.module.scss';

type ButtonType = {
  name: string;
  type: 'submit' | 'reset' | 'button';
  onClick?: (e: MouseEvent) => void;
};
export default function Button({ name, type }: ButtonType) {
  return (
    <button className={style.button_wrapper} type={type}>
      {name}
    </button>
  );
}
