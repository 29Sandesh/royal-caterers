/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Official Royal Caterers India (RCI) Brand Palette
        royal: '#692C90',          // Primary Royal Purple
        'royal-dark': '#4A2366',     // Deep Imperial Plum / Aubergine
        'royal-light': '#834FA0',    // Bright Royal Violet
        gold: '#F1A91E',             // Vibrant Saffron Marigold Gold
        'gold-toned': '#D8D0B9',     // Champagne Toned Gold (Brocade)
        'gold-muted': '#C5A15A',     // Antique Warm Gold
        ivory: '#F6F1E6',            // Warm Royal Linen Cream
        ink: '#2B2B2B',              // Charcoal Ink
        saffron: '#F58231',          // Warm Sunset Saffron
        crimson: '#D7263D',          // Ruby Ceremonial Red
        'veg-green': '#4DAF4E',      // 100% Pure Vegetarian Green
        peacock: '#56B7AD',          // Indian Peacock Teal
        white: '#FFFFFF',

        // Semantic bindings
        primary: '#692C90',
        'primary-container': '#4A2366',
        'on-primary': '#FFFFFF',
        secondary: '#F1A91E',
        'secondary-container': '#D8D0B9',
        'on-secondary': '#4A2366',
        surface: '#F6F1E6',
        'surface-card': '#FFFFFF',
        'surface-subtle': '#EFEAE0',
        'border-brand': '#D8D0B9',
        'border-royal': '#692C90',
      },
      borderRadius: {
        none: '0px',
        sm: '2px',
        DEFAULT: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px',
        full: '9999px',
      },
      boxShadow: {
        subtle: '0 2px 14px rgba(74, 35, 102, 0.05)',
        elevated: '0 14px 36px rgba(74, 35, 102, 0.10)',
        royal: '0 16px 40px rgba(105, 44, 144, 0.18)',
        modal: '0 24px 56px rgba(43, 43, 43, 0.28)',
      },
      fontFamily: {
        didot: ['"Playfair Display"', 'Didot', 'Georgia', 'serif'],
        trajan: ['Cinzel', '"Trajan Pro 3"', 'Georgia', 'serif'],
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        cursive: ['"Great Vibes"', 'cursive'],
      },
    },
  },
  plugins: [],
};
