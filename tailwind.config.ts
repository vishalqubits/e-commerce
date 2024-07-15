import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: "#FFFFFF",
      primary1: "#363738",
      secondary: "F5F5F5",
      secondary1: "FEFAF1",
      bg: "#FFFFFF",
      text: "#FAFAFA",
      text1: "#7D8184",
      text2: "#000000",
      button: "#000000",
      secondary2: "#DB4444",
      button1: "#00FF66",
      button2: "#DB4444",
      hoverButton: "#E07575",
      hoverButtonLight: "#A0BCE0",
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
