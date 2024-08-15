import { Link } from 'react-router-dom';
import style from './App.module.scss';

export default function App() {
  return (
    <div className={style.app_wrapper}>
      <h1>Main page</h1>
      <nav>
        <ul className={style.app_nav}>
          <li>
            <Link to="/form-one" className={style.app_link}>
              First form
            </Link>
          </li>
          <li>
            <Link to="/form-two" className={style.app_link}>
              Second form
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
