 /** @type {import('tailwindcss').Config} */
 export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        caveat: ['var(--font-caveat)'],
        'nova-cut': ['var(--font-nova-cut)']
      },
    },
  },
  plugins: [],
}