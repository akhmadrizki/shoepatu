/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-banner": "linear-gradient(180deg, #FFF3F0 0%, #FFEFEC 100%)",
      },
      colors: {
        "gradient-banner": "#FFF3F0",
        "blue-primary": "#5577F6",
        "dark-primary": "#2C3E50",
        "brown-primary": "#603256",
        "brown-hover": "#60325626",
      },
      scale: {
        "-100": "-1",
      },
      fontFamily: {
        primary: "Poppins, sans-serif",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
