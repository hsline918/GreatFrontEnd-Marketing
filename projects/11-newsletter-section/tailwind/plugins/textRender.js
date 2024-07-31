import plugin from "tailwindcss/plugin";

export default plugin(function ({ addUtilities }) {
  const newUtilities = {
    ".text-render-optimize": {
      "text-rendering": "optimizeLegibility",
    },
  };
  addUtilities(newUtilities, ["responsive", "hover"]);
});
