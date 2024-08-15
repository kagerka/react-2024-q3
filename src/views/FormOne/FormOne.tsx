import Form from '../../components/Form/Form';
import style from './FormOne.module.scss';

export default function FormOne() {
  return (
    <div className={style.formOne_wrapper}>
      <h1>Form One</h1>
      <Form />
    </div>
  );
}
