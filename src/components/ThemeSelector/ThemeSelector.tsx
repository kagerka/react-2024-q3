import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { currentTheme } from '../../store/themeSlice';
import ThemeContext from '../../utils/ThemeContext';
import style from './ThemeSelector.module.scss';

function ThemeSelector() {
  const dispatch = useDispatch();
  const theme = useSelector((store: RootState) => store.currentTheme.theme);

  const { setTheme } = useContext(ThemeContext);

  const handleChange = () => {
    if (theme === 'dark') {
      setTheme('light');
      dispatch(currentTheme('light'));
    } else {
      setTheme('dark');
      dispatch(currentTheme('dark'));
    }
  };

  return (
    <form className={style.wrapper} onChange={handleChange}>
      <input
        type="checkbox"
        className={style.input}
        id="themeSelector"
        checked={theme === 'dark'}
        readOnly
      />
      <label className={style.label} htmlFor="themeSelector">
        {' '}
        <span className={style.span} />
      </label>
    </form>
  );
}

export default ThemeSelector;
