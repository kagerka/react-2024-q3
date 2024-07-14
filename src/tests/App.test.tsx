import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import App from '../App';

describe('App', () => {
  test('renders the App component', () => {
    render(<App />);
    expect(screen.getByText('Submit')).toBeDefined();
    expect(
      screen.getByText('You can search any animal you want'),
    ).toBeDefined();
    expect(screen.getByPlaceholderText('Search...')).toBeDefined();
  });
});
