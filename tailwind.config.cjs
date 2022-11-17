/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      background: 'rgb(var(--color-background) / <alpha-value>)',
      'background-intermediate': 'rgb(var(--color-intermediate-background) / <alpha-value>)',
      default: 'rgb(var(--color-text) / <alpha-value>)',
      highlighted: 'rgb(var(--color-text-highlighted) / <alpha-value>)',
      disabled: 'rgb(var(--color-text-secondary) / <alpha-value>)',
      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      tertiary: 'rgb(var(--color-tertiary) / <alpha-value>)',
      white: 'rgb(211, 211, 211)',
      gray: 'rgb(var(--color-gray) / <alpha-value>)',
      transparent: 'transparent',
    },
    extend: {
      fontFamily: {
        base: ['Quicksand', 'sans-serif']
      }
    },
  },
  plugins: [],
}
