/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Kitchen.html/*.{html,js}"],
   
  theme: {
    backgroundColor: {
      'current': '#2C2C33', 
      'current2':'#0000008f',
      'black':'#000'
    },
    fontFamily: {
       inter:['Inter','sans-serif'],
      jet: ['JetBrains Mono', 'serif'], 
    },
    screens: {
      w768: '768px',   // Custom max-width of 768px
      w992: '992px',   // Custom max-width of 992px
      w1120: '1120px', 
       w400:'400px',  // Custom max-width of 1120px
    },
  },
  plugins: [],
}