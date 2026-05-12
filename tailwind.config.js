/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'si-bg':      '#080A0D',
        'si-secondary': '#0F1117',
        'si-text':    '#F1F5F9',
        'si-muted':   '#94A3B8',
        'si-dim':     '#475569',
        'si-emerald': '#34D399',
        'si-cyan':    '#22D3EE',
      },
      fontFamily: {
        sora:     ['var(--font-sora)', 'sans-serif'],
        'dm-sans':['var(--font-dm-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
