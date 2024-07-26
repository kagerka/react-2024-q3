import { useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import style from './App.module.scss';
import ThemeContext from './utils/ThemeContext';
import Home from './views/Home/Home';
import NotFound from './views/NotFound/NotFound';

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeContext.Provider>
    </main>
  );
}

export default App;
