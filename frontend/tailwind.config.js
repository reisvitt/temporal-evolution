import animate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx,html}',
  ],
  prefix: '',
  theme: {
    extend: {
      fontSize: {},
      fontFamily: {},
      colors: {
        primary: "#F28B04"
      },
      borderRadius: {},
    },
  },
  plugins: [animate],
}

