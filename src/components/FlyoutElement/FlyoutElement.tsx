import { useDispatch, useSelector } from 'react-redux';
import { clearAll } from '../../store/checkedSlice';
import { RootState } from '../../store/store';
import Button from '../Button/Button';
import style from './FlyoutElement.module.scss';

function FlyoutElement() {
  const dispatch = useDispatch();
  const checkedItems = useSelector((store: RootState) => store.checked.checkedItems);

  const handleUnselectClick = () => {
    dispatch(clearAll([]));
  };

  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        <div className={style.titleNumber}>{checkedItems.length}</div>
        <div>selected animals</div>
      </div>
      <div className={style.buttons}>
        <Button name="Unselect all" className={style.unselectBtn} onClick={handleUnselectClick} />
        <Button name="Download" className={style.downloadBtn} />
      </div>
    </div>
  );
}

export default FlyoutElement;
