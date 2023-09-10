/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-banner": "linear-gradient(180deg, #FFF3F0 0%, #FFEFEC 100%)",
      },
      colors: {
        "gradient-banner": "#FFF3F0",
      },
      scale: {
        "-100": "-1",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: false,
  },
};
