/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        coal: "#050505",
        cream: '#F5F1E6',
        gold: {
          old: '#D4AF37',
        }
      },
    },
  },
  plugins: [],
}
