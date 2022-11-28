/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    colors: {
      black: {
        600: 'rgb(31, 31, 31)',
        700: 'rgb(21, 21, 21)',
        800: 'rgb(14, 14, 14)',
        900: 'rgb(0, 0, 0)'
      },
      white: {
        100: 'rgb(255, 255, 255)',
        400: 'rgb(211, 211, 211)',
        500: 'rgb(201, 201, 201)',
      },
      green: {
        100: 'rgb(163, 187, 173)',
        500: 'rgb(53, 114, 102)',
        900: 'rgb(14, 59, 67)'
      },
      orange: 'rgb(200, 105, 17)',
      red: 'rgb(221, 0, 0)',
      blue: 'rgb(0, 49, 224)',
      gray: {
        100: 'rgb(91, 91, 91)',
        500: 'rgb(151, 151, 151)',
      },
      transparent: 'transparent',
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
