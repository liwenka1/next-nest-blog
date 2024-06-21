/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      ssm: '600px',
      sm: '640px',
      md: '768px',
      mlg: '900px',
      lg: '1024px',
      lxl: '1200px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      backgroundImage: {
        image_overlay:
          'linear-gradient(rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.88)), url("@/assets/auth/overlay.jpg")'
      },
      boxShadow: {
        light: '-8px 8px 20px -4px rgba(145, 158, 171, 0.12)'
      },
      borderColor: {
        light: 'rgba(145, 158, 171, 0.08)'
      }
    }
  },
  plugins: []
}
