import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        my_gray_100: '#A0A0A0',
        my_gray_200: '#8E8E8E',
        my_blue: '#2480ED',
        my_black: '#444444',
      },
      fontFamily: {
        georgia: ['Georgia']
      }
    },
  },
  plugins: [],
} satisfies Config;
