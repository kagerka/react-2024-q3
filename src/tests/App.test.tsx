import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, test } from 'vitest';
import App from '../App';
import { store } from '../store/store';

describe('App', () => {
  test('renders the App component', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen.getByText('Submit')).toBeDefined();
    expect(screen.getByText('You can search any animal you want')).toBeDefined();
    expect(screen.getByPlaceholderText('Search...')).toBeDefined();
  });
});
