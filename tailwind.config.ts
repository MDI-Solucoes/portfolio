import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF00FF",
        secondary: "#FFFFFF",
      },
      keyframes: {
        slideTopToBottom: {
          "0%": { transform: "translateY(-25vh)" },
          "100%": { transform: "translateY(0vh)" },
        },
      },
      animation: {
        slideTopToBottom: "slideTopToBottom 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
