import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#12201d",
        moss: "#35685a",
        coral: "#e86f51",
        gold: "#f3b33d",
        sky: "#d9f0ff",
        paper: "#faf8f2"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(18, 32, 29, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
