import { fonts } from "./tailwind/fonts";
import { shadows } from "./tailwind/shadows";
import { backgrounds } from "./tailwind/backgrounds";

import textRenderPlugin from "./tailwind/plugins/textRender";

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../02-blog-card/src/**/*.{js,ts,jsx,tsx}",
  ],
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
