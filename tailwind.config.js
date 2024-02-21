/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ...
      alignItems: ['responsive', 'hover', 'focus', 'group-hover'],
      justifyContent: ['responsive', 'hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
}

