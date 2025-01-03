/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        graphik: ['Graphik', 'sans-serif'],
        'graphik-bold': ['Graphik-Bold', 'sans-serif'],
      },
      colors: {
        primary: '#2091F9',
        text: '#252B42',
        'secondary-text': '#374754',
        'dark-brackground': '#252B42'
      }
    },
  },
  plugins: [],
}

