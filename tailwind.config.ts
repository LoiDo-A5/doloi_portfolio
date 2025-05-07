import type { Config } from "tailwindcss";
import * as flowbite from "flowbite-react/tailwind";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [flowbite.plugin()],
} satisfies Config;
