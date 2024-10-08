import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import App from '../App';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Search from '../components/Search/Search';
import { store } from '../store/store';

const renderProviders = (ui: React.ReactElement) => render(ui, {});

describe('Error Boundary', () => {
  it(`should render error boundary component when there is no error`, () => {
    const { getByText } = renderProviders(
      <Provider store={store}>
        <ErrorBoundary>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ErrorBoundary>
      </Provider>,
    );

    expect(getByText('You can search any animal you want')).toBeDefined();
  });

  it(`should render error boundary component when there is no error`, () => {
    const { getByPlaceholderText } = renderProviders(
      <Provider store={store}>
        <ErrorBoundary>
          <Search />,
        </ErrorBoundary>
      </Provider>,
    );

    expect(getByPlaceholderText('Search...')).toBeDefined();
  });
});
