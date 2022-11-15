const { default: pallete } = require('./pallete.cjs');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    // colors: { ...pallete },
    colors: {
      background: 'rgb(var(--color-background) / <alpha-value>)',
      'background-intermediate': 'rgb(var(--color-intermediate-background) / <alpha-value>)',
      default: 'rgb(var(--color-text) / <alpha-value>)',
      highlighted: 'rgb(var(--color-text-highlighted) / <alpha-value>)',
      disabled: 'rgb(var(--color-text-secondary) / <alpha-value>)',
      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      tertiary: 'rgb(var(--color-tertiary) / <alpha-value>)',
    },
    extend: {
      fontFamily: {
        base: ['Quicksand', 'sans-serif']
      }
    },
  },
  plugins: [],
}
