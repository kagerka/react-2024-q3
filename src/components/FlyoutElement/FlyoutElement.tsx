import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearAll } from '../../store/checkedSlice';
import { RootState } from '../../store/store';
import Button from '../Button/Button';
import style from './FlyoutElement.module.scss';

function FlyoutElement() {
  const dispatch = useDispatch();
  const checkedItems = useSelector((store: RootState) => store.checked.checkedItems);

  const [csvLink, setCsvLink] = useState('');

  const handleUnselectClick = () => {
    dispatch(clearAll([]));
  };

  const handleDownloadClick = () => {
    const tableTitles = Object.keys(checkedItems[0]);
    const tableData = [];
    tableData.push(tableTitles);
    checkedItems.forEach((item) => {
      tableData.push(Object.values(item));
    });
    let csv = '';
    tableData.forEach((row) => {
      csv += `${row.join(';')}\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8,' });
    const dataLink = URL.createObjectURL(blob);
    setCsvLink(dataLink);
  };

  return (
    <div
      className={(checkedItems.length > 0 && `${style.wrapper} ${style.active}`) || style.wrapper}
    >
      <div className={style.title}>
        <div className={style.titleNumber}>{checkedItems.length}</div>
        <div>selected animals</div>
      </div>
      <div className={style.buttons}>
        <Button name="Unselect all" className={style.unselectBtn} onClick={handleUnselectClick} />
        <a
          href={csvLink}
          aria-label="Download"
          download={`${checkedItems.length}_animals`}
          data-testid="download"
        >
          <Button name="Download" className={style.downloadBtn} onClick={handleDownloadClick} />
        </a>
      </div>
    </div>
  );
}

export default FlyoutElement;
