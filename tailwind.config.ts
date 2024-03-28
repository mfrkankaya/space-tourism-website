import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontSize: {
      'heading-xs': ['28px', { lineHeight: '34px', letterSpacing: '4.72px' }],
      'heading-sm': ['32px', { lineHeight: '37px', letterSpacing: '0px' }],
      'heading-md': ['56px', { lineHeight: '64px', letterSpacing: '0px' }],
      'heading-lg': ['100px', { lineHeight: '115px', letterSpacing: '0px' }],
      'heading-xl': ['150px', { lineHeight: '172px', letterSpacing: '0px' }],
      'subheading-sm': [
        '14px',
        { lineHeight: '17px', letterSpacing: '2.36px' }
      ],
      'subheading-md': ['28px', { lineHeight: '32px', letterSpacing: '0px' }],
      nav: ['16px', { lineHeight: '19px', letterSpacing: '2.7px' }],
      body: ['18px', { lineHeight: '32px', letterSpacing: '0px' }]
    },
    extend: {
      colors: {
        background: '#0B0D17',
        foreground: '#ffffff',
        secondary: '#D0D6F9'
      },
      fontFamily: {
        bellefair: ['var(--bellefair)'],
        'barlow-condensed': ['var(--barlow-condensed)']
      }
    }
  },
  plugins: []
}
export default config
