/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "noto-sans": ['"Noto Sans"', "sans-serif"],
      },
      boxShadow: {
        soft: "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",
      },
      backgroundImage: {
        "gradient-148":
          "linear-gradient(147.52deg, #f9fafb 8.89%, #d2d6db 100.48%)",
      },
    },
    variants: {},

    plugins: [
      function ({ addUtilities }) {
        const newUtilities = {
          ".hide-scrollbar": {
            "scrollbar-width": "none",
            "-ms-overflow-style": "none",
            "&::-webkit-scrollbar": {
              width: "0",
              height: "0",
            },
          },
        };
        addUtilities(newUtilities, ["responsive", "hover"]);
      },
      function ({ addUtilities }) {
        const newUtilities = {
          ".text-render-optimize": {
            "text-rendering": "optimizeLegibility",
          },
        };

        addUtilities(newUtilities, ["responsive", "hover"]);
      },
    ],
  },
};
