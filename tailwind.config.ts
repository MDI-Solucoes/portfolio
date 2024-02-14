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
        "top-to-bottom": {
          "0%": { transform: "translateY(-25vh)" },
          "100%": { transform: "translateY(0vh)" },
        },
        "left-to-right": {
          "0%": { transform: "translateX(-100vw)" },
          "100%": { transform: "translateX(0vw)" },
        },
      },
      animation: {
        "top-to-bottom": "top-to-bottom 1s ease-in-out",
        "left-to-right": "left-to-right 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
