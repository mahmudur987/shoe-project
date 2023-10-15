/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/tw-elements/dist/js/**/*.js",
];
export const theme = {
  extend: {},
};
export const darkMode = "class";
export const plugins = [
  require("tw-elements/dist/plugin.cjs"),
  require("daisyui"),
];
//
