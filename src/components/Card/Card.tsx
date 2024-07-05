import { PureComponent } from 'react';
import { IAnimal } from '../../utils/interfaces';
import style from './Card.module.scss';

class Card extends PureComponent<IAnimal> {
  render() {
    const { name, avian, canine, earthAnimal, earthInsect, feline, uid } =
      this.props;

    return (
      <div className={style.card}>
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
}

export default Card;
