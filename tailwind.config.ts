import type { Config } from "tailwindcss"

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
        myriad: ['MyriadPro-Regular', "sans"],
        aparatija: ['Aparatija-Regular', "sans-serif"],
        helvetica: ['Helvetica', "sans"],
        monoscript: ['Monique-Script', "sans-serif", "cursive"],
        typewriter: ['Typewriter', "sans"],
        abril: ['Abril Fatface', "serif"],
        arima: ['Arima', "system-ui"],
        willmard: ['Willmard-Valiant', "cursive"],
      },
      colors: {
        light: '#F4F2F3',
        primary: '#765e3a'
      }
    },
  },
  plugins: [],
}
export default config
