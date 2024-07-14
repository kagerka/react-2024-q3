import avianImg from '../../assets/avian.png';
import canineImg from '../../assets/canine.png';
import earthImg from '../../assets/earth.png';
import felineImg from '../../assets/feline.png';
import insectImg from '../../assets/insect.png';
import unknownImg from '../../assets/unknown.png';
import { IAnimal } from '../../utils/interfaces';
import style from './DetailedCard.module.scss';

interface ICardInfo {
  animal: IAnimal;
  onClick: (value: boolean) => void;
}

function DetailedCard(props: ICardInfo) {
  const { animal, onClick } = props;
  const { name, avian, canine, earthAnimal, earthInsect, feline, uid } = animal;

  const handleClick = () => {
    onClick(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div className={style.card}>
      <div
        className={style.close}
        onClick={handleClick}
        onKeyDown={(e) => handleKeyPress(e)}
        role="link"
        tabIndex={0}
        aria-label="Close button"
      />
      <div className={style.image}>
        {avian ? <img src={avianImg} alt={name} /> : null}
        {canine ? <img src={canineImg} alt={name} /> : null}
        {earthAnimal ? <img src={earthImg} alt={name} /> : null}
        {earthInsect ? <img src={insectImg} alt={name} /> : null}
        {feline ? <img src={felineImg} alt={name} /> : null}
        {!feline && !earthInsect && !earthAnimal && !canine && !avian ? (
          <img src={unknownImg} alt={name} title={name} />
        ) : null}
      </div>
      <h2 className={style.title}>{name}</h2>
      <div>
        {avian ? <p>This is an avian</p> : null}
        {canine ? <p>This is a canine</p> : null}
        {earthAnimal ? <p>This is an earth animal</p> : null}
        {earthInsect ? <p>This is an earth insect</p> : null}
        {feline ? <p>This is a feline</p> : null}
      </div>
      <div>ID: {uid}</div>
    </div>
  );
}

export default DetailedCard;
