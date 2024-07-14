import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Button from '../components/Button/Button';

describe('Button', () => {
  test('renders the Button component', () => {
    render(<Button name="Button" />);
    expect(screen.getByText('Button')).toBeDefined();
  });
});
