import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';

export default function Header() {
  return (
    <header className={style.header_wrapper}>
      <nav>
        <ul className={style.header_nav}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${style.header_link} ${style.header_active}` : `${style.header_link}`
              }
            >
              Main page
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/form-one"
              className={({ isActive }) =>
                isActive ? `${style.header_link} ${style.header_active}` : `${style.header_link}`
              }
            >
              First form
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/form-two"
              className={({ isActive }) =>
                isActive ? `${style.header_link} ${style.header_active}` : `${style.header_link}`
              }
            >
              Second form
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
