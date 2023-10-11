module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    backgroundImage: {
      'designer': 'url("../src/assets/main-banner/bg1.jpg")',
      'text-bg' : 'url("../src/assets/shap/ext-blue.png")',
      'text-bgy' : 'url("../src/assets/shap/ext-orange.png")',
      'service' : 'url("../src/assets/banner/img1.jpg")',
      'servicebg' : 'url("../src/assets/banner/shape.png")',
      'servicebg2' : 'url("../src/assets/background/line-bg3.png")',
      'member1' : 'url("../src/assets/team/member1.jpg")',
      'shape1' : 'url("../src/assets/team/member1.jpg")',
      'contact' : 'url("../src/assets/about/pic-1.jpg")',
    },
    extend: {
      keyframes:{
        updown:{
          '50%' : {
            transform: 'translateX(120px)'
          },
          '100%' :{
            transform: 'translateX(0px)',
          },  
        },
        animation: {
          updown: 'updown 2s linear infinite',
        },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
}
