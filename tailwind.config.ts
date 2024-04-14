import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    fontFamily: {
      parisienne: ["Parisienne", "cursive"],
      vijaya: ['Vijaya-Regular', "sans-serif", "cursive"],
      myriad: ['MyriadPro-Regular', "sans-serif", "cursive"],
    }
    },
  },
  plugins: [],
};
export default config;
