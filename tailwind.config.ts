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
        primary: "#0077B6",
        secondary: "#FF4444",
        background: {
          light: "#FFFFFF",
          dark: "#000000",
        },
        text: {
          light: "#000000",
          dark: "#FFFFFF",
        },
        section: {
          light: "#F5F7FA",
          dark: "#121212",
        },
      },
    },
  },
  plugins: [],
};
export default config;
