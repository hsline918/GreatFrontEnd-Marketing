/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "noto-sans": [
          '"Noto Sans"',
          '"system - ui"',
          '"-apple - system"',
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          '"Open Sans"',
          '"Helvetica Neue"',
          '"sans - serif"',
        ],
      },
      boxShadow: {
        soft: "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",
      },
      backgroundImage: {
        "gradient-148": "linear-gradient(140deg, #f9fafb 0%, #d2d6db 100%)",
      },
    },
    variants: {},

    plugins: [
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
