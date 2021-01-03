// const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.vue'],
  theme: {
    colors: {
      primary: '#219a23',
      primaryDark: '#117111',
      primaryInvert: '#BFFF65',
      secondary: '#1789d2',
      secondaryDark: '#0e58c0',
      secondaryInvert: '#fff3bc',
      tertiary: '#e18c4d',
      tertiaryDark: '#d65c2e',
      tertiaryInvert: '#f5ff59',
    },
    fontFamily: {
      sans: ['Source Sans Pro', 'sans-serif'],
      serif: ['WindsorDOT', 'serif'],
      serifBold: ['WindsorDOT-Bold', 'serif'],
      coconat: ['Coconat', 'serif'],
      coconatBold: ['Coconat-BoldExt', 'serif'],
      body: ['Source Sans Pro', 'sans-serif'],
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
