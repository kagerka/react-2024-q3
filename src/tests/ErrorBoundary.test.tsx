import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../App';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Search from '../components/Search/Search';

const renderProviders = (ui: React.ReactElement) => render(ui, {});

describe('Error Boundary', () => {
  it(`should render error boundary component when there is no error`, () => {
    const { getByText } = renderProviders(
      <ErrorBoundary>
        <App />
      </ErrorBoundary>,
    );

    expect(getByText('Submit')).toBeDefined();
  });

  it(`should render error boundary component when there is no error`, () => {
    const { getByPlaceholderText } = renderProviders(
      <ErrorBoundary>
        <Search />,
      </ErrorBoundary>,
    );

    expect(getByPlaceholderText('Search')).toBeDefined();
  });
});
