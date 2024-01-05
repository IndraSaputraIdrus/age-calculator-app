/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "error": "var(--primary-light-red)"
      }
    },
  },
  plugins: [],
}

