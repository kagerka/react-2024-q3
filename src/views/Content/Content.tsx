import React from 'react';
import Card from '../../components/Card/Card';
import { IAnimal } from '../../utils/interfaces';
import style from './Content.module.scss';

export interface IProps {
  value?: string;
  animals?: IAnimal[];
}

class Content extends React.PureComponent<IProps> {
  static defaultProps = { value: '', animals: [] };

  constructor(props: IProps) {
    super(props);

    const value = localStorage.getItem('searchValue');
    this.state = {
      value,
      animals: [],
    };
  }

  componentDidMount() {
    const { value, animals } = this.props;
    localStorage.setItem('contentProps', JSON.stringify({ value, animals }));

    window.addEventListener('storage', () => {
      const valueLS = localStorage.getItem('searchValue');
      const searchResult = JSON.parse(
        localStorage.getItem('searchResult') ?? '',
      ) as IAnimal[];
      if (valueLS && searchResult)
        this.setState({ value: valueLS, animals: searchResult });
    });
  }

  render() {
    const { value, animals } = this.state as IProps;
    return (
      <div className={style.wrapper}>
        <div className={style.searchWord}>
          {value ? (
            <p>You searched word &quot;{value}&quot;</p>
          ) : (
            <p>You can search any animal you want</p>
          )}
        </div>
        <div className={style.cardsWrapper}>
          {animals?.map((animal) => {
            return (
              <Card
                key={animal.uid}
                name={animal.name}
                avian={animal.avian}
                canine={animal.canine}
                earthAnimal={animal.earthAnimal}
                earthInsect={animal.earthInsect}
                feline={animal.feline}
                uid={animal.uid}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Content;
