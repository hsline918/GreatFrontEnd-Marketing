const { fonts } = require("./tailwind/fonts");
const { shadows } = require("./tailwind/shadows");
const { backgrounds } = require("./tailwind/backgrounds");
const { screens } = require("./tailwind/screens");
const { keyframes } = require("./tailwind/keyframes");
const { animation } = require("./tailwind/animation");

const textRenderPlugin = require("./tailwind/plugins/textRender");

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      ...fonts,
      ...shadows,
      ...backgrounds,
      ...screens,
      ...keyframes,
      ...animation,
    },
    variants: {},

    plugins: [textRenderPlugin],
  },
};
