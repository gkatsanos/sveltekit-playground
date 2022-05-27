module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    screens: {
      tablet: '768px',
      laptop: '1024px',
      desktop: '1140px',
      'tablet-down': { max: '767px' },
      'laptop-down': { max: '1023px' },
      'desktop-down': { max: '1439px' },
      'tablet-only': { min: '768px', max: '1023px' },
    },
  },
  plugins: [],
}
