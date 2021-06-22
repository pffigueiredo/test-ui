import React from 'react';
import { StyledButton } from './Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  it('should render the primary button', () => {
    render(<StyledButton  />);
    expect(screen.getByRole('button')).toBeTruthy();
  });
});
