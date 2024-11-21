import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        cyan: {
          500: '#00FFFF',
        },
        magenta: {
          500: '#FF00FF',
        },
        yellow: {
          500: '#FFFF00',
        },
        'custom-magenta': '#FF00FF',
        'custom-yellow': '#FFFF00',
        'custom-blue': '#02f',
        'custom-light-blue': '#75afff',
        'custom-medium-blue': '#3853ff',
        'custom-bg': '#fcfcfc',
      },
    },
  },
  plugins: [],
};
export default config;
