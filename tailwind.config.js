/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
       "inter": ['inter'], 
       "circular": ['Circular std'] 
      },
      colors : {
        "brown" : '#964B00',
      "grey" : '#222831',
      "amber": '#78350f',
      "orange" : {
        100: '#FFEDD5',
        200: '#FEF3C7',
        300: '#FDE68A',
        400: '#FCD34D',
        500: '#FBBF24',
        600: '#F59E0B',
        700: '#D97706',
        800: '#B45309',
        900: '#92400E',
      },
      dropShadow: {
        "sm-shadow" : [
          '0px 548px 219px rgba(0, 0, 0, 0.01)',
          '0px 308px 185px rgba(0, 0, 0, 0.04)',
          '0px 137px 137px rgba(0, 0, 0, 0.06)',
          '0px 34px 75px rgba(0, 0, 0, 0.07)',
          '0px 0px 0px rgba(0, 0, 0, 0.07)'
        ],
        "lg-shadow" : [
          '0px 81px 32px rgba(0, 0, 0, 0.01)',
          '0px 45px 27px rgba(0, 0, 0, 0.05)',
          '0px 20px 20px rgba(0, 0, 0, 0.09)',
          '0px 5px 11px rgba(0, 0, 0, 0.1)',
          '0px 0px 0px rgba(0, 0, 0, 0.1)'
        ],
        "xl-shadow" : [
          '0px 41px 89px rgba(0, 0, 0, 0.1)',
          '0px 0px 0px rgba(0, 0, 0, 0.1)'
        ],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
}
