import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      spacing: {
        "13": "3.25rem",
      },
      gridTemplateColumns: {
        timeline: "0.25rem minmax(0, 1fr)",
        "timeline-alt": "1fr 0.25rem 1fr",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
export default config;
