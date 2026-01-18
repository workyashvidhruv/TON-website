import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        foreground: '#000000',
        background: '#ffffff',
        muted: '#666666',
        'neutral-200': '#e5e5e5',
      },
      fontFamily: {
        mono: ['IBM Plex Mono', 'monospace'],
      },
      fontSize: {
        'hero': ['40px', { lineHeight: '1.1' }],
        'hero-sm': ['24px', { lineHeight: '1.2' }],
        'section': ['35px', { lineHeight: '1.1' }],
        'section-sm': ['18px', { lineHeight: '1.2' }],
      },
      borderRadius: {
        'btn': '40px',
        'icon': '10px',
      },
    },
  },
  plugins: [],
}
export default config
