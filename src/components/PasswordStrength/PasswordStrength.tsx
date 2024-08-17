import style from './PasswordStrength.module.scss';

type passwordStrengthType = {
  value: number;
};
export default function PasswordStrength(props: passwordStrengthType) {
  const { value } = props;

  return (
    <div className={style.passwordStrength_wrapper}>
      <progress value={value} max={5} className={style.passwordStrength_progressBar} />
      <label htmlFor="">Password strength</label>
    </div>
  );
}
