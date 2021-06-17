import React from 'react';
import { Button } from './Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  it('should render the primary button', () => {
    render(<Button  />);
    expect(screen.getByRole('button')).toBeTruthy();
  });
});
