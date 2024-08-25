/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-1': '#f3f4f6',
        'gray-1': 'hsl(0, 0%, 62.8%)',
        'gray-2': 'hsl(0, 0%, 15.8%)',
        'gray-3': '#161616',
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateY(5px)', opacity: '0' }, // Start from slightly below and invisible
          '100%': { transform: 'translateY(0)', opacity: '1' },  // End at natural position and fully visible
        },
      },
      animation: {
        'slide-in': 'slide-in 0.4s ease-in-out forwards',
      },
      animationDelay: {
        '0': '0s',
        '100': '0.1s',
        '200': '0.2s',
        '300': '0.3s',
        '400': '0.4s',
        '500': '0.5s',
        '600': '0.6s',
        '700': '0.7s',
        '800': '0.8s',
        '900': '0.9s',
        '1000': '1.0s',
        '1100': '1.1s',
      },
    },
  },
  plugins: [
    function({ addUtilities, theme, e }) {
      const delayUtilities = Object.entries(theme('animationDelay')).map(([key, value]) => {
        return {
          [`.${e(`delay-${key}`)}`]: {
            animationDelay: value,
          },
        };
      });
      addUtilities(delayUtilities);
    },
  ],
};
