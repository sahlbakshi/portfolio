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
        linkGray: 'oklch(0.556 0 0)',
        linkBlue: '#2480ED',
      },
      fontFamily: {
        georgia: ['Georgia']
      }
    },
  },
  plugins: [],
} satisfies Config;
