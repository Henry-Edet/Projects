const { keyframes } = require("framer-motion");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // add paths to your content
  ],
  theme: {
    extend: {
      animation: {
        'skill-bar': 'widthGrow 0.8s ease-out forwards',
      },
      keyframes: {
        widthGrow: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--width)' },
        },
      },
      fontFamily: {
        sans: ['var(--font-grotesk)', 'sans-serif'],
      },
      colors: {
        primary: {
          600: '#2563eb',
        },
        secondary: {
          500: '#8b5cf6',
        },
      },
      backdropBlur: {
        xs: '2px',
        lg: '16px',
      },
      backdropSaturate: {
        150: '1.5',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            a: {
              color: theme('colors.primary.600'),
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            img: {
              borderRadius: '0.5rem',
              maxHeight: '400px',
              objectFit: 'cover',
            },
            h1: { fontWeight: '700' },
            h2: { fontWeight: '600', marginTop: '2rem' },
            p: { marginBottom: '1rem' },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.200'),
            a: {
              color: theme('colors.secondary.500'),
              '&:hover': {
                textDecoration: 'underline',
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
