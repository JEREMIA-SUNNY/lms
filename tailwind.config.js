/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./Layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        primary: '#17a34a',
        secondary: '#FF8042',
        textprimary: '#000000',
        textSecondary: '#747574'
      }
    },
  },
  plugins: [],
}