/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        light: '#FFFEFE',
        grey: '#F0F0F8',
        lighttext: '#60697B',
        darktext: '#343F52',
        indigolight: '#776BFF', 
        indigodark: '#5A4BBF',  
        orangepastel: '#EA8838' 
      },  
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
        lora: ['Lora', 'serif'], 
      },
    },
  },
  plugins: [],
}
