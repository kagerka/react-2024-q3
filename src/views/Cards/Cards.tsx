import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import { RootState } from '../../store/store';
import style from './Cards.module.scss';

export default function Cards() {
  const formData = useSelector((store: RootState) => store.form.formData);

  return (
    <>
      <h1>Main page</h1>
      <div className={style.cards_wrapper}>
        {formData.map((card) => {
          return <Card card={card} key={card.time} />;
        })}
      </div>
    </>
  );
}
