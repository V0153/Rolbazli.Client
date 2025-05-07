/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'light-orange': '#FFEDD5', // açık turuncu rengi ekledim
        'dark-orange': '#F97316', // koyu turuncu rengi ekledim
      },
      animation: {
        marquee: 'marquee 10s linear infinite', // Marquee animasyonu
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' }, // sağdan sola hareket
          '100%': { transform: 'translateX(-100%)' }, // sola doğru hareket
        },
      },
    },
  },
  plugins: [],
}
