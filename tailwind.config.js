const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        'sans': [...defaultTheme.fontFamily.sans],
      },
      // keyframes: {
      //   'mask-left': {
      //     '0%': { 'clip-path': 'inset(0 100% 0 0)' },
      //     '100%': { 'clip-path': 'inset(0 0 0 0)' },
      //   }
      // },
      // animation: {
      //   'mask-left': '0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards mask-left',
      // }
    },
  },
  plugins: [
    require("daisyui"),
  ],
  important: true,
}
