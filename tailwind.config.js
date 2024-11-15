/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        "c-one" : "#182f35",
        "c-two" : "#7ae7c7",
        "c-three" : "#6d8371",
        "c-four": "#112429"
      },
      backgroundImage:{
        "section-one" :" url('../img/coaching3-slider-pic3.svg')",
        "section-two" :" url('../img/coaching3-slider-pic2.svg')",
        "section-three" :" url('../img/coaching3-section-bg1.svg')",
        "section-four" :" url('../img/coaching3-section-bg2.webp')",
        "section-five" :" url('../img/coaching3-section-bg3.svg')",
        "section-x-1" :" url('../img/coaching3-pic9.webp')",
        "section-x-2" :" url('../img/coaching3-pic8.webp')",
        "section-x-3" :" url('../img/coaching3-pic10.webp')",
        "section-x-4" :" url('../img/coaching3-pic14.webp')"
      },
      backgroundSize:{
        "one-size" : "230%",
        "two-size" : "100% 100%",
        "three-size" : "103% 23%"
      },
      backgroundPosition:{
        "one-pos" : "0 0"
      },
      width : {
        "screen-header" : "calc(100vw - 16rem)"
      },
      animation : {
        spinslow : "spins 30s linear infinite"
      },
      keyframes : {
        spins : {
          from : {
            transform: "rotate(0deg);"
          },
          to: {
            transform: "rotate(360deg);"
          }
        }
      }
    },
  },
  plugins: [],
}

