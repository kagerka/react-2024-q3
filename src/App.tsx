import { useMemo, useState } from 'react';
import style from './App.module.scss';
import ThemeContext from './utils/ThemeContext';
import Home from './views/Home/Home';

function App() {
  const [theme, setTheme] = useState('light');
  const themeContext = useMemo(() => ({ theme, setTheme }), [theme]);

  const lightTheme = {
    colorScheme: 'light',
  };

  const darkTheme = {
    colorScheme: 'dark',
  };

  return (
    <main style={theme === 'light' ? lightTheme : darkTheme} className={style.app}>
      <ThemeContext.Provider value={themeContext}>
        <Home />
      </ThemeContext.Provider>
    </main>
  );
}

export default App;
