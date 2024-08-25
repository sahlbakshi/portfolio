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
    },
  },
  plugins: [],
};
