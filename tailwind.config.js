/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Geologica: ['Geologica']
      },
      colors: {
        first: {
          1: '#6DF2CC',
          2: '#04DBA2',
          3: '#404040',
        },
        second: {
          1: '#8FDCC2',
          2: '#233831',
          3: '#D4EDE4',
          4: '#588D7B'
        }
      },
    },
  },
  plugins: [],
}

