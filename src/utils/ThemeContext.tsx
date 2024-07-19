import { createContext } from 'react';

interface IThemeContext {
  theme: string;
  setTheme: (theme: string) => void;
}
const ThemeContext = createContext<IThemeContext>({
  theme: 'light',
  setTheme: () => {},
});
export default ThemeContext;
