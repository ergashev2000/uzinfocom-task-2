/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#252A3B',
        secondary: '#5254F1',
        textColor: '#252A3B',
        textSecondary: '#7F8A9E',
      },
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
