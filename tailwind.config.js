/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'white-jail': "url('/assets/logo/white.svg')",
        'black-jail': "url('/assets/logo/black.svg')",
      },
    },
  },
  plugins: [],
}
