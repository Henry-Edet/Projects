const { keyframes } = require("framer-motion");

// tailwind.config.js
module.exports = {
    // ...
    theme: {
      extend: {
        animation: {
          'skill-bar': 'widthGrow 0.8s ease-out forwards',
        },
        keyframes:{
          widthGrow: {
            '0%': { width: '0%' },
            '100%': { width: 'var(--width)' },
          }
        },
        fontFamily: {
          sans: ['var(--font-grotesk)', 'sans-serif'],
        },
        colors: {
          primary: {
            600: '#2563eb', // blue-600
          },
          secondary: {
            500: '#8b5cf6', // purple-500 
          }
        },
        backdropBlur: {
          xs: '2px',
          lg: '16px',
        },
        backdropSaturate: {
          150: '1.5',
        }
      }
    }
  }