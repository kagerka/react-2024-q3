import { useDispatch, useSelector } from 'react-redux';
import { currentAnimalData, pageNumber } from '../../store/appSlice';
import { RootState } from '../../store/store';
import { DEFAULT_ANIMAL } from '../../utils/constants';
import Button from '../Button/Button';
import style from './Pagination.module.scss';

function Pagination() {
  const dispatch = useDispatch();
  const totalPages = useSelector((store: RootState) => store.app.totalPages);
  const handleClickBtn = (e: React.MouseEvent, page: number) => {
    e.preventDefault();
    dispatch(pageNumber(page - 1));
    dispatch(currentAnimalData(DEFAULT_ANIMAL));
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
