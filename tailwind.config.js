/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './pages/*.{html,js}',
    './components/**/*.{html,js}',
     './components/layout/Layout.js',
     './pages/_app.js',
     './src/**/*.{js,ts,jsx,tsx,mdx}',
     
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.5rem', // Customize the size as needed
      },
    },
  },
  plugins: [],
}

