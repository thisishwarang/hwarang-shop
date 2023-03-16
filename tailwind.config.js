/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",   //경로가 잘못되면 tailwind 적용이 안됨
  ],
  theme: {
    extend: {
      colors: {
        brand: '#F96162',
      }
    },
  },
  plugins: ["jest"],
}
