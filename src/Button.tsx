import React from 'react';
import { styled, CSS, StitchesVariants } from './stitches.config';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

export const StyledButton = styled('button', {
  // Reset
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // Common behaviour
  border: '8px solid',
  borderRadius: '$4',
  padding: '$4',
  boxShadow: '0 2px 4px 0 lightgrey',

  variants: {
    variant: {
      primary: {
        color: 'red',
      },
      secondary: {
        color: 'blue',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

type ButtonCSSProp = { css?: CSS };
type ButtonVariants = StitchesVariants<typeof StyledButton>;
type ButtonOwnProps = ButtonCSSProp & ButtonVariants;
type ButtonComponent = Polymorphic.ForwardRefComponent<
  'button',
  ButtonOwnProps
>;

export type ButtonProps = React.ComponentPropsWithRef<ButtonComponent>;

export const Button = React.forwardRef((props, forwardRef) => {
  return <StyledButton {...(props as any)} ref={forwardRef} />;
}) as ButtonComponent;

Button.toString = () => `.${StyledButton.className}`;
