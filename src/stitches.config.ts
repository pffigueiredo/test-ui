import { createCss } from '@stitches/react';
import type { StitchesCss } from '@stitches/react';

export type { StitchesVariants } from '@stitches/react';
export type CSS = StitchesCss<typeof stitches>;

const stitches = createCss({
  theme: {
    colors: {
      shadowLight: 'hsl(206 22% 7% / 35%)',
      shadowDark: 'hsl(206 22% 7% / 20%)',
    },
    fonts: {
      untitled: 'Untitled Sans, -apple-system, system-ui, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
  },
});

export const {
  styled,
  css,
  theme,
  getCssString,
  global,
  keyframes,
  config,
} = stitches;
