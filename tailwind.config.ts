import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}", // Scan all TSX/TS files
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['"Inter"', 'sans-serif'],
      },

      // keyframes: {
      //   'fade-in-up': {
      //     '0%': { opacity: 0, transform: 'translateY(20px)' },
      //     '100%': { opacity: 1, transform: 'translateY(0)' },
      //   }
      // },
      // animation: {
      //   'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
      // }
    },
  },
  plugins: [],
};

export default config;