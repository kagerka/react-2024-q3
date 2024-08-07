import Image from 'next/image';
import avianImg from '../../../public/assets/avian.png';
import canineImg from '../../../public/assets/canine.png';
import earthImg from '../../../public/assets/earth.png';
import felineImg from '../../../public/assets/feline.png';
import insectImg from '../../../public/assets/insect.png';
import unknownImg from '../../../public/assets/unknown.png';
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
    return 'Enter';
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
        data-testid="card-info"
      />
      <div className={style.image}>
        {avian ? <Image src={avianImg} alt={name} /> : null}
        {canine ? <Image src={canineImg} alt={name} /> : null}
        {earthAnimal ? <Image src={earthImg} alt={name} /> : null}
        {earthInsect ? <Image src={insectImg} alt={name} /> : null}
        {feline ? <Image src={felineImg} alt={name} /> : null}
        {!feline && !earthInsect && !earthAnimal && !canine && !avian ? (
          <Image src={unknownImg} alt={name} title={name} />
        ) : null}
      </div>
      <h2 className={style.title}>{name}</h2>
      <div>
        {avian ? <div>This is an avian</div> : null}
        {canine ? <div>This is a canine</div> : null}
        {earthAnimal ? <div>This is an earth animal</div> : null}
        {earthInsect ? <div>This is an earth insect</div> : null}
        {feline ? <div>This is a feline</div> : null}
      </div>
      <div>ID: {uid}</div>
    </div>
  );
}

export default DetailedCard;
