import { useEffect, useState } from 'react';
import { Blocks } from 'react-loader-spinner';
import Card from '../../components/Card/Card';
import Pagination from '../../components/Pagination/Pagination';
import { useGetAnimalByUIDMutation } from '../../services/api';
import { IAnimal } from '../../utils/interfaces';
import DetailedCard from '../DetailedCard/DetailedCard';
import style from './Content.module.scss';

interface IProps {
  searchValue: string;
  searchResult: IAnimal[];
  isSearching: boolean;
  totalPages: number;
  onClick: (value: number) => void;
  handleDetails: (value: string) => void;
}

const defaultAnimal = {
  avian: false,
  canine: false,
  earthAnimal: false,
  earthInsect: false,
  feline: false,
  name: '',
  uid: '',
};

function Content({
  searchValue,
  searchResult,
  isSearching,
  totalPages,
  onClick,
  handleDetails,
}: IProps) {
  const [currentAnimal, setCurrentAnimal] = useState<IAnimal>(defaultAnimal);
  const [getCurrentAnimal, { data, error, isLoading }] =
    useGetAnimalByUIDMutation();

  useEffect(() => {
    if (data) setCurrentAnimal(data.animal);
  }, [data]);

  const handleClick = async (currentUID: string) => {
    await getCurrentAnimal(currentUID);
    if (data) setCurrentAnimal(data.animal);
    if (error) console.error('There is a problem with fetching data', error);
    handleDetails(currentUID);
  };

  const handleCloseClick = () => {
    setCurrentAnimal(defaultAnimal);
    handleDetails('');
  };

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
        <div className={style.cardsPaginationDetailsWrapper}>
          <div
            className={
              currentAnimal.uid === ''
                ? style.cardsPaginationWrapper
                : `${style.cardsPaginationWrapper} ${style.detailedActive}`
            }
          >
            <div className={style.cardsWrapper}>
              {searchResult.length === 0 ? (
                <p className={style.notFound}>Nothing was found</p>
              ) : (
                searchResult?.map((animal: IAnimal) => {
                  return (
                    <Card
                      key={animal.uid}
                      animal={animal}
                      onClick={() => handleClick(animal.uid)}
                    />
                  );
                })
              )}
            </div>
            {searchResult.length !== 0 ? (
              <Pagination totalPages={totalPages} onClick={onClick} />
            ) : null}
          </div>
          {currentAnimal.uid !== '' ? (
            <div className={style.detailsWrapper}>
              {isLoading ? (
                <Blocks
                  height="80"
                  width="80"
                  color="#4fa94d"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  visible
                />
              ) : (
                <DetailedCard
                  animal={data !== undefined ? data?.animal : currentAnimal}
                  onClick={handleCloseClick}
                />
              )}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default Content;
