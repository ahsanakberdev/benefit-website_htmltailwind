/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'Sans-pro': ['Source Sans Pro'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '1rem',
        lg: '1rem',
        xl: '1rem',
        '2xl': '0rem',
      },
    },
    extend: {
      backgroundSize : {
        "adjust" : "100% 100%"
      },
      fontSize: {
        'XlargeFont': '50px',
      },
      colors: {
        dark : {
          "100" : "#101010",
          "200" : "#1F1E1E",
        },
        secondary : {
          "100" : "#7ABA05"
        },
        grey : {
          "100" : "#808080",
          "200" : "#555555",
        },
        light : {
          "100" : "#F4F4F4",
          "200" : "#E3E3E3"
        }
      },
      backgroundImage: {
        'banner': "url('/Banner.jpg')",
        'offers': "url('../src/img/offers.jpg')",
        'clubs': "url('../src/img/clubs.jpg')",
        'offer-icon': "url('../src/img/offer-icon.svg')",
        'arrow-right': "url('../src/img/arrow-right.svg')",
        'round-circle': "url('../src/img/round-circle.svg')",
      }
    },
  },
  plugins: [],
}

