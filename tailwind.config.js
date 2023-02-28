/** @type {import('tailwindcss').Config} */
// prettier-ignore
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'purple': '#1A0B2E',
      'white': '#FFF',
      'low-purple': '#312147',
      'deep-purple': '#11071F',
      'text-purple': "#7127BA",
      'ouivalo': "#2fba88",
      'border': "#693B93",
      "color-btn": "#2C1250"
    },
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
    corePlugins: {
    preflight: true // <== disable this!
  },

}
