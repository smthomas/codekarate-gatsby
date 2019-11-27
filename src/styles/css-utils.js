/* eslint-disable import/prefer-default-export */
/* Variables and functions specifically for CSS-in-JS use */

/* Media queries */
const breakpoints = [480, 900, 1200];
const names = [`xs`, `phoneLarge`, `desktop`];

export const mediaQueries = breakpoints.reduce((acc, bp, i) => {
  acc[names[i]] = `@media (min-width: ${bp}px)`;
  return acc;
}, {});

export const jsBreakpoints = breakpoints.reduce((acc, bp, i) => {
  acc[names[i]] = bp;
  return acc;
}, {});

/* Colors */
export const colors = {
  white: `#fff`,
  whiteFaded: `rgba(255, 255, 255, 0.7)`,
  black: `#000`,
  gray: `#E0E0E0`,
  darkgray: `#29292A`,
  darkgrayFaded: `rgb(41, 41, 42, 0.7)`,
  mediumgray: `#757575`,
  red: `#EC1C24`,
  lightblue: `#28A8E0`,
};

export const sizes = {
  xxs: `10px`,
  xs: `12px`,
  s: `14px`,
  m: `18px`,
  l: `24px`,
  xl: `28px`,
  xxl: `36px`,
  xxxl: `42px`,
};
