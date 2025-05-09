const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      fontFamily:{
        inter: 'Inter'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': {
            transform: 'translateY(20px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          },
        },
      },
      colors: {
        dark: '#323941',
        grey: '#B1B5C0',
        white:'#ffffff',
        green: '#39F2AE',
        secondary_green:'#00B371',
        // default
        secondary: '#6B5B95',
        darkbg: '#1A1A1A',
        lightbg: '#F4F4F4',
        slate: colors.slate, // Importa la escala completa
      },
      boxShadow: {
        'xl-dark': '0 20px 25px -5px rgba(255, 255, 255, 0.1), 0 8px 10px -6px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')({ strategy: 'class' }),
  ],
};
