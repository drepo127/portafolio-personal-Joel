/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
    theme: {
      extend: {
        animation: {
          'bg-pan': 'bg-pan 10s linear infinite',
        },
        keyframes: {
          'bg-pan': {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
        },
      },
    },
    plugins: [],
  }
  