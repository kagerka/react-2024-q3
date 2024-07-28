import { IAnimal } from '../../utils/interfaces';
import Checkbox from '../Checkbox/Checkbox';
import style from './Card.module.scss';

interface ICardInfo {
  animal: IAnimal;
  onClick: (value: string) => Promise<void>;
}

function Card(props: ICardInfo) {
  const { animal, onClick } = props;
  const { name, uid } = animal;

  const handleClick = async (currentUID: string) => {
    await onClick(currentUID);
  };

  const handleKeyPress = async (e: React.KeyboardEvent, currentUID: string) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      await handleClick(currentUID);
    }
  };

  return (
    <div
      className={style.card}
      onClick={() => handleClick(uid)}
      onKeyDown={(e) => handleKeyPress(e, uid)}
      role="link"
      tabIndex={0}
    >
      <h2 className={style.title}>{name}</h2>
      <p>ID: {uid}</p>
      <Checkbox animal={animal} />
    </div>
  );
}

export default Card;
