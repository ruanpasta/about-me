/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      background: 'rgb(21, 21, 21)',
      'background-intermediate': 'rgb(31, 31, 31)',
      default: 'rgb(211, 211, 211)',
      highlighted: 'rgb(255, 255, 255)',
      disabled: 'rgb(91, 91, 91)',
      primary: 'rgb(200, 105, 17)',
      secondary: 'rgb(221, 0, 0)',
      tertiary: 'rgb(0, 49, 224)',
      white: 'rgb(211, 211, 211)',
      gray: 'rgb(91, 91, 91)',
      transparent: 'transparent',
      // background: 'rgb(var(--color-background) / <alpha-value>)',
      // 'background-intermediate': 'rgb(var(--color-intermediate-background) / <alpha-value>)',
      // default: 'rgb(var(--color-text) / <alpha-value>)',
      // highlighted: 'rgb(var(--color-text-highlighted) / <alpha-value>)',
      // disabled: 'rgb(var(--color-text-secondary) / <alpha-value>)',
      // primary: 'rgb(var(--color-primary) / <alpha-value>)',
      // secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      // tertiary: 'rgb(var(--color-tertiary) / <alpha-value>)',
      // white: 'rgb(211, 211, 211)',
      // gray: 'rgb(var(--color-gray) / <alpha-value>)',
      // transparent: 'transparent',
    },
    extend: {
      fontFamily: {
        base: ['Quicksand', 'sans-serif']
      }
    },
    screens: {
      'sm': '640px', // => @media (min-width: 640px) { ... }
      'md': '768px', // => @media (min-width: 768px) { ... }
      'lg': '1024px', // => @media (min-width: 1024px) { ... }
      'xl': '1280px', // => @media (min-width: 1280px) { ... }
      '2xl': '1536px', // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
