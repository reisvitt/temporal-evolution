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
        primary: "#F28B04",
      },
      borderRadius: {},
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 2s ease-in-out alternate infinite',
      },
    },
  },
  plugins: [animate],
}

