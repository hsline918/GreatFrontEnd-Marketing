/** @type { import('@storybook/react').Preview } */
import "../src/tailwind.css";
export const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const globalTypes = {
  scheme: {
    name: "Scheme",
    description: "Select light or dark theme",
    defaultValue: "both",
    toolbar: {
      icon: "mirror",
      items: ["light", "dark", "both"],
      dynamicTitle: true,
    },
  },
};
