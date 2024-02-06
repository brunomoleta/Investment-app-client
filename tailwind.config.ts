import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'primary': 'linear-gradient(to right, hsl(136, 64%, 51%), hsl(192, 69%, 51%))',
      },
      colors: {
        'start': 'hsl(136, 64%, 51%)',
        'end': 'hsl(192, 69%, 51%)',
      }
    },
  },
  plugins: [],
};
export default config;