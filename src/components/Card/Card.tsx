import { CardProps } from '../../utils/types';
import style from './Card.module.scss';

export default function Card(props: CardProps) {
  const { card } = props;

  return (
    <div className={style.card_wrapper}>
      <div>
        <img src={card.file} />
      </div>
      <div>
        <span>Name:</span> {card.name}
      </div>
      <div>
        <span>Age:</span> {card.age}
      </div>
      <div>
        <span>E-mail:</span> {card.email}
      </div>
      <div>
        <span>Password:</span> {card.password}
      </div>
      <div>
        <span>Gender:</span> {card.gender}
      </div>
      <div>
        <span>T&C agreement:</span> {card.terms ? 'yes' : 'no'}
      </div>
      <div>
        <span>Country:</span> {card.country}
      </div>
    </div>
  );
}
