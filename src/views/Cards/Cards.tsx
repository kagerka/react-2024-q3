import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import { RootState } from '../../store/store';
import style from './Cards.module.scss';

export default function Cards() {
  const formData = useSelector((store: RootState) => store.form.formData);

  useEffect(() => {
    // console.log(formData);
  }, [formData]);

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
