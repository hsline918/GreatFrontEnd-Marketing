/** @type {import('tailwindcss').Config} */
import { shadows } from "./src/tailwind/shadows";
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      ...shadows,
    },
  },
  plugins: [],
};
