import { fonts } from "./tailwind/fonts/fonts";
import { shadows } from "./tailwind/shadows";
import { backgrounds } from "./tailwind/backgrounds";
import { screens } from "./tailwind/screens";
import { keyframes } from "./tailwind/keyframes";
import { animation } from "./tailwind/animation";
import textRenderPlugin from "./tailwind/plugins/textRender";

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      ...fonts,
      ...shadows,
      ...backgrounds,
      ...screens,
      ...keyframes,
      ...animation,
    },
  },
  plugins: [textRenderPlugin],
};
