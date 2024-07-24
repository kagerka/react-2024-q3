import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, test } from 'vitest';
import Home from '../views/Home/Home';

describe('Home', () => {
  test('renders the Home component', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>,
    );
    expect(screen.getByText('Submit')).toBeDefined();
    expect(screen.getByText('You can search any animal you want')).toBeDefined();
    expect(screen.getByPlaceholderText('Search...')).toBeDefined();
  });
});
