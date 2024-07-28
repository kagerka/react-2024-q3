import { useContext, useState } from 'react';
import ThemeContext from '../../utils/ThemeContext';
import style from './ThemeSelector.module.scss';

function ThemeSelector() {
  const [checked, setChecked] = useState(true);
  const { setTheme } = useContext(ThemeContext);

  const handleChange = () => {
    setChecked(!checked);
    if (!checked) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <form className={style.wrapper} onChange={handleChange}>
      <input type="checkbox" className={style.input} id="themeSelector" />
      <label className={style.label} htmlFor="themeSelector">
        {' '}
        <span className={style.span} />
      </label>
    </form>
  );
}

export default ThemeSelector;
