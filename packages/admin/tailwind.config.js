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
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      backgroundImage: {
        image_overlay:
          'linear-gradient(rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.88)), url("@/assets/auth/overlay.jpg")'
      }
    }
  },
  plugins: []
}
