import { red } from "./colors";

export const base = {
  breakpoint: {
    xs: '320px',
    sm: '600px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px'
  },

  device: {
    mobileS: `(max-width: 600px)`,
    mobileL: `(min-width: 600px)`,
    tablet: `(min-width: 768px)`,
    laptop: `(min-width: 992px)`,
    desktop: `(min-width: 1200px)`,
    desktopLg: `(min-width: 1400px)`,
    desktopXl: `(min-width: 1800px)`
  },

  font: {
    body: 'Inter, system-ui, sans-serif',
    fontWeight: 500
  },

  fontSize: {
    s1: '2rem',
    s2: '1.8rem',
    s3: '1.6rem',
    s4: '1.4rem',
    s5: '1.2rem',
    s6: '1rem',
    s7: '0.8rem',
  },

  width: {
    w1: `8.333%`,
    w2: `16.666%`,
    w3: `25%`,
    w4: `33.333%`,
    w5: `41.666%`,
    w6: `50%`,
    w7: `58.333%`,
    w8: `66.666%`,
    w9: `75%`,
    w10: `83.333%`,
    w11: `91.666%`,
    w12: `100%`,
  },

  colors: {
    primary: "#000000",
    hover: "#707070",
    secondary: "#909090",
    background: "#ffffff",
    border: "#505050",

    gray100: "#f0f0f0",
    gray200: "#d0d0d0",
    gray300: "#b0b0b0",
    gray400: "#909090",
    gray500: "#707070",
    gray600: "#505050",
    gray700: "#303030",
    gray800: "#101010",
    gray900: "#080808",

    error: red,
  }
}