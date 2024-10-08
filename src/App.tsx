import { Outlet } from 'react-router-dom';
import style from './App.module.scss';
import Header from './components/Header/Header';

export default function App() {
  return (
    <>
      <Header />
      <div className={style.app_wrapper}>
        <Outlet />
      </div>
    </>
  );
}
