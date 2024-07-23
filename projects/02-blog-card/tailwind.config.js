const { fonts } = require("./tailwind/fonts");
const { shadows } = require("./tailwind/shadows");
const { backgrounds } = require("./tailwind/backgrounds");
const textRenderPlugin = require("./tailwind/plugins/textRender");

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      ...fonts,
      ...shadows,
      ...backgrounds,
    },
    variants: {},

    plugins: [textRenderPlugin],
  },
};
