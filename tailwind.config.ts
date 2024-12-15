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
        "title-gradient-start": "#5cff78",
        "title-gradient-end": "#33889a",
        "gradient-start": "#1a202c",
        "gradient-middle": "#13303c",
        "gradient-end": "#084957",
        "primary-green": "#55a5b6",
        "border-green": "#3CB490",
      },
      fontFamily: {
        quicksand: ["var(--font-quicksand)"],
        porsha: ["var(--font-porsha)"],
      },
      backgroundImage: {
        "gradient-to-r": "linear-gradient(to bottom, #5cff78 5%, #33889a 100%)",
        "gradient-primary":
          "linear-gradient(to top, #1a202c 0%, #13303c 43%, #084957 100%)",
      },
      fontSize: {
        "custom-96": "9.6rem",
        "custom-64": "6.4rem",
        "custom-48": "4.8rem",
        "custom-32": "3.2rem",
        "custom-24": "2.4rem",
        "custom-18": "1.8rem",
        "custom-14": "1.4rem",
        "custom-12": "1.2rem",
        "custom-10": "1rem",
      },
    },
  },
  plugins: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
};
export default config;
