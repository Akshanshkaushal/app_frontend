 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2rem',   
        '5xl': '2.5rem',   
        '6xl': '3rem', 
      },
    },
  },
  plugins: [],
}
