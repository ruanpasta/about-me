const { default: pallete } = require('./pallete.cjs');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: { ...pallete },
    extend: {
      fontFamily: {
        base: ['Quicksand', 'sans-serif']
      }
    },
  },
  plugins: [],
}
