import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#062F87',
          dark: '#171944',
        },
        secondary: '#fe5b32',
        tertiary: {
          DEFAULT: '#00a09b',
          light: '#cceceb',
        },
      },
    },
  },
  plugins: [],
};
export default config;
