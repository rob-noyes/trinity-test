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
        form: '#454545',
        input: '#A2B9C2',
        block: '#ED9E98',
      },
      width: {
        140: '140px',
      },
      boxShadow: {
        form: '0 10px 20px 0 rgba(0,0,0,0.1)',
      },
      borderRadius: {
        mdlg: '7px',
      },
      letterSpacing: {
        form: '3.13px',
      },
    },
  },
  plugins: [],
};
