import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Router } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import { Blocks } from 'react-loader-spinner';
import { Provider } from 'react-redux';
import style from '../App.module.scss';
import '../index.scss';
import { store } from '../store/store';
import ThemeContext from '../utils/ThemeContext';

function AppPage({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  const [theme, setTheme] = useState('light');
  const themeContext = useMemo(() => ({ theme, setTheme }), [theme]);

  const lightTheme = {
    colorScheme: 'light',
  };

  const darkTheme = {
    colorScheme: 'dark',
  };

  return (
    <>
      <Head>
        <title>Animal&#39;s searching</title>
      </Head>
      {loading ? (
        <div
          style={theme === 'light' ? lightTheme : darkTheme}
          className={style.loader}
        >
          <Blocks
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            visible
          />
        </div>
      ) : (
        <Provider store={store}>
          <main
            style={theme === 'light' ? lightTheme : darkTheme}
            className={style.app}
          >
            <ThemeContext.Provider value={themeContext}>
              <Component {...pageProps} />
            </ThemeContext.Provider>
          </main>
        </Provider>
      )}
    </>
  );
}
export default AppPage;
