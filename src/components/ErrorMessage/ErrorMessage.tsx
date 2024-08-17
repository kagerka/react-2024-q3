import style from './ErrorMessage.module.scss';

type Props = {
  errorMsg: string[];
};
export default function ErrorMessage(props: Props) {
  const { errorMsg } = props;

  return <div className={style.errorMessage_wrapper}>{errorMsg}</div>;
}
