import { useContext, useEffect, useState } from 'react';
import ThemeContext from '../../utils/ThemeContext';
import style from './ThemeSelector.module.scss';

function ThemeSelector() {
  const [checked, setChecked] = useState(true);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme === 'light') {
      document.body.setAttribute('style', 'color-scheme: light');
    }
    if (theme === 'dark') {
      document.body.setAttribute('style', 'color-scheme: dark');
    }
  }, [theme]);

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
