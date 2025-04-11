/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      transitionProperty: {
        'transform': 'transform',
      },
      colors: {
        primary: '#2B5C3F',
        secondary: '#4A7C59',
        accent: '#8CB369',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans Variable', 'sans-serif'],
        heading: ['Manrope Variable', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        extend: {
          brightness: {
            40: '.4',
          },
          transform: {
            'perspective': 'perspective(1000px)',
            'preserve-3d': 'preserve-3d',
            'backface': 'backface-visibility',
          },
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
    },
  },
  plugins: [],
}