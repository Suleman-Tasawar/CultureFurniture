/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '310px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      "grey":"#fff",
      "background": "#0c0d0f",
      "primary": "#1d3532",
      "white": "#fafafa",
      "light-yellow": "#e1ab64",
      "neutral-yellow": "#d9c0a0",
      "dark-brown": "#75634d",
      "show-brown": "#725e3a",
      "button-background": "#b3d6cd",
      "green-neutral":"#6C9996",
      "border-grey":"#E0E0E0",
    },
    extend: {},
  },
  plugins: [],
}