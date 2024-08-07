import { useRouter } from 'next/navigation';
import { Blocks } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import Pagination from '../../components/Pagination/Pagination';
import { currentAnimalData } from '../../store/appSlice';
import { RootState } from '../../store/store';
import { DEFAULT_ANIMAL } from '../../utils/constants';
import { IAnimal } from '../../utils/interfaces';
import DetailedCard from '../DetailedCard/DetailedCard';
import style from './Content.module.scss';

function Content() {
  const dispatch = useDispatch();
  const router = useRouter();

  const loadingStatus = useSelector((store: RootState) => store.app.loading);
  const searchStringValue = useSelector(
    (store: RootState) => store.app.searchString,
  );
  const searchResult = useSelector(
    (store: RootState) => store.app.searchResult,
  );
  const currentAnimal = useSelector(
    (store: RootState) => store.app.currentAnimalData,
  );
  const pageNumber = useSelector((store: RootState) => store.app.pageNumber);

  const handleClick = (currentUID: string) => {
    router.replace(
      `/search?page=${pageNumber + 1}${searchStringValue !== '' ? `&name=${searchStringValue}` : ''}&uid=${currentUID}`,
    );
  };

  const handleCloseClick = () => {
    dispatch(currentAnimalData(DEFAULT_ANIMAL));
    router.replace(
      `/search?page=${pageNumber + 1}${searchStringValue !== '' ? `&name=${searchStringValue}` : ''}`,
    );
  };

  const spinner = () => {
    return (
      <Blocks
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible
      />
    );
  };

  return (
    <div className={style.wrapper}>
      <div className={style.searchWord}>
        {searchStringValue ? (
          <div>You searched word &quot;{searchStringValue}&quot;</div>
        ) : (
          <div>You can search any animal you want</div>
        )}
      </div>
      {loadingStatus ? (
        <div className={style.loaderWrapper}>{spinner()}</div>
      ) : (
        <div className={style.cardsPaginationDetailsWrapper}>
          <div
            className={
              (currentAnimal.uid === '' && style.cardsPaginationWrapper) ||
              `${style.cardsPaginationWrapper} ${style.detailedActive}`
            }
          >
            <div className={style.cardsWrapper}>
              {searchResult.length === 0 ? (
                <div className={style.notFound}>Nothing was found</div>
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
            {searchResult.length !== 0 ? <Pagination /> : null}
          </div>
          {currentAnimal.uid !== '' ? (
            <div className={style.detailsWrapper}>
              <DetailedCard animal={currentAnimal} onClick={handleCloseClick} />
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default Content;
