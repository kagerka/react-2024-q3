import Button from '../Button/Button';
import style from './Pagination.module.scss';

export interface IProps {
  totalPages: number;
  onClick: (value: number) => void;
}

function Pagination(props: IProps) {
  const { totalPages, onClick } = props;

  const handleClickBtn = (e: React.MouseEvent, page: number) => {
    e.preventDefault();
    onClick(page - 1);
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
