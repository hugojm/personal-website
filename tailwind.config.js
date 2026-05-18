/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        swiss: {
          bg: '#FFFFFF',
          fg: '#000000',
          muted: '#F2F2F2',
          accent: '#FF3000',
          border: '#000000',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      fontSize: {
        '10xl': ['10rem', { lineHeight: '0.85' }],
        '11xl': ['12rem', { lineHeight: '0.82' }],
      },
      letterSpacing: {
        tightest: '-0.04em',
        widest: '0.18em',
      },
      transitionTimingFunction: {
        swiss: 'cubic-bezier(0.2, 0, 0, 1)',
      },
    },
  },
  plugins: [],
};
