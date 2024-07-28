import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        "2xl": "200px",
      },
    },
    extend: {
      colors: {
        background: "#ffffff",
        fg: "#000000",
        subtle: "#484848",
        muted: "#8c8c8c",
        border: "#000",
      },
    },
  },
  plugins: [],
};
export default config;
