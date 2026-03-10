/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#ec5b13',
        'background-light': '#f8f6f6',
        'background-dark': '#0a0a0c',
        'accent-blue': '#3b82f6',
        'accent-purple': '#a855f7',
      },
      fontFamily: {
        display: ['Public Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
