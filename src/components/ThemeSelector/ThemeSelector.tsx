import { useState } from 'react';
import style from './ThemeSelector.module.scss';

function ThemeSelector() {
  const [checked, setChecked] = useState(true);

  const handleChange = () => {
    setChecked(!checked);

    if (!checked) {
      document.body.setAttribute('style', 'color-scheme: light');
    } else {
      document.body.setAttribute('style', 'color-scheme: dark');
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
