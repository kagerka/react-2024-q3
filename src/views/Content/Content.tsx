import { Blocks } from 'react-loader-spinner';
import Card from '../../components/Card/Card';
import { IAnimal } from '../../utils/interfaces';
import style from './Content.module.scss';

export interface IProps {
  searchValue: string;
  searchResult: IAnimal[];
  isSearching: boolean;
}

function Content({ searchValue, searchResult, isSearching }: IProps) {
  return (
    <div className={style.wrapper}>
      <div className={style.searchWord}>
        {searchValue && searchValue !== '' ? (
          <p>You searched word &quot;{searchValue}&quot;</p>
        ) : (
          <p>You can search any animal you want</p>
        )}
      </div>
      {isSearching ? (
        <div className={style.loaderWrapper}>
          <Blocks
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            visible
          />
        </div>
      ) : (
        <div className={style.cardsWrapper}>
          {searchResult.length === 0 ? (
            <p className={style.notFound}>Nothing was found</p>
          ) : (
            searchResult?.map((animal: IAnimal) => {
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
            })
          )}
        </div>
      )}
    </div>
  );
}

export default Content;
