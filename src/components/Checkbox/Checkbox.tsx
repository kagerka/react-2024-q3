import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../store/checkedSlice';
import { RootState } from '../../store/store';
import { IAnimal } from '../../utils/interfaces';
import style from './Checkbox.module.scss';

interface ICheckbox {
  animal: IAnimal;
}

function Checkbox(props: ICheckbox) {
  const dispatch = useDispatch();
  const { animal } = props;
  const checkedItems = useSelector(
    (store: RootState) => store.checked.checkedItems,
  );
  const [isCheckedState, setIsCheckedState] = useState(false);

  useEffect(() => {
    const checkItemResult = checkedItems.filter(
      (item) => item.uid === animal.uid,
    );
    if (checkItemResult.length > 0) setIsCheckedState(true);
    if (checkItemResult.length === 0) setIsCheckedState(false);
  }, [animal, checkedItems]);

  const handleChange = () => {
    if (isCheckedState === false) dispatch(addItem(animal));
    if (isCheckedState === true) dispatch(removeItem(animal));
    setIsCheckedState(!isCheckedState);
  };

  return (
    <div className={style.wrapper}>
      <form className={style.checkboxForm}>
        <input
          type="checkbox"
          checked={isCheckedState}
          className={style.checkboxInput}
          onChange={() => handleChange()}
          id={animal.uid}
        />
        <label className={style.label} htmlFor={animal.uid}>
          {' '}
        </label>
      </form>
    </div>
  );
}

export default Checkbox;
