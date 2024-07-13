import { Blocks } from 'react-loader-spinner';
import Card from '../../components/Card/Card';
import Pagination from '../../components/Pagination/Pagination';
import { IAnimal } from '../../utils/interfaces';
import style from './Content.module.scss';

interface IProps {
  searchValue: string;
  searchResult: IAnimal[];
  isSearching: boolean;
  totalPages: number;
  onClick: (value: number) => void;
}

function Content({
  searchValue,
  searchResult,
  isSearching,
  totalPages,
  onClick,
}: IProps) {
  return (
    <div className={style.wrapper}>
      <div className={style.searchWord}>
        {searchValue ? (
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
        <div className={style.cardsPaginationWrapper}>
          <div className={style.cardsWrapper}>
            {searchResult.length === 0 ? (
              <p className={style.notFound}>Nothing was found</p>
            ) : (
              searchResult?.map((animal: IAnimal) => {
                return <Card key={animal.uid} animal={animal} />;
              })
            )}
          </div>
          {searchResult.length !== 0 ? (
            <Pagination totalPages={totalPages} onClick={onClick} />
          ) : null}
        </div>
      )}
    </div>
  );
}

export default Content;
