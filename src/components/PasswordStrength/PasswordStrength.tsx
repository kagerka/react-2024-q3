import style from './PasswordStrength.module.scss';

export default function PasswordStrength() {
  return (
    <div className={style.passwordStrength_wrapper}>
      <div className={style.passwordStrength_low}></div>
      <div className={style.passwordStrength_medium}></div>
      <div className={style.passwordStrength_high}></div>
      <div className={style.passwordStrength_perfect}></div>
    </div>
  );
}
