import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, test } from 'vitest';
import { store } from '../store/store';
import Home from '../views/Home/Home';

describe('Home', () => {
  test('renders the Home component', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Provider>,
    );
    expect(screen.getByText('Submit')).toBeDefined();
    expect(screen.getByText('You can search any animal you want')).toBeDefined();
    expect(screen.getByPlaceholderText('Search...')).toBeDefined();
  });
});
