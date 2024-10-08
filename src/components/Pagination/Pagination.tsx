import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Button from '../Button/Button';
import style from './Pagination.module.scss';

function Pagination() {
  const router = useRouter();

  const searchString = useSelector(
    (store: RootState) => store.app.searchString,
  );
  const totalPages = useSelector((store: RootState) => store.app.totalPages);

  const handleClickBtn = (e: React.MouseEvent, page: number) => {
    e.preventDefault();

    router.replace(
      `/search?page=${page}${searchString !== '' ? `&name=${searchString}` : ''}`,
    );
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i += 1) {
    pages.push(
      <Button
        key={i}
        name={i.toString()}
        className={style.pageNumber}
        onClick={(e) => handleClickBtn(e, i)}
      />,
    );
  }

  return <div className={style.wrapper}>{pages}</div>;
}

export default Pagination;
