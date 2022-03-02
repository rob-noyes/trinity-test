module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfairDisplay: ['Playfair Display', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        phonebgdark: '#232E3E',
        phonebg: '#2D394A',
        border: '#979797',
      },
      width: {
        140: '140px',
      },
      listStyleType: {
        checkmark: './image-assets/checkmark.png',
      },
    },
  },
  plugins: [],
};
