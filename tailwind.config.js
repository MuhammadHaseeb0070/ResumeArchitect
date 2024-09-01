/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      roman: ['Times New Roman'],
      poppins: ['Poppins', 'Poppins'], // Add your custom font here
      raleway: ['Raleway', 'Raleway'], // Example for Google Fonts
    },
  },
  plugins: [],
}