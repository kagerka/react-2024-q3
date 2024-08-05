import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import '../index.scss';
import { store } from '../store/store';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Animal&#39;s searching</title>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
export default App;
