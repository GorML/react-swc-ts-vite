import type { Preview } from "@storybook/react";
import "../src/index.css";
import "tailwindcss/tailwind.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "teracloud-light",
      values: [
        {
          name: "teracloud-light",
          value: "#dee2ff",
        },
      ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
