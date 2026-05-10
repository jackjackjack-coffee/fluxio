import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        f: {
          bg: '#0A0A0A',
          'bg-2': '#111111',
          'bg-3': '#161616',
          blue: '#0066FF',
          'blue-dim': 'rgba(0,102,255,0.12)',
          'blue-glow': 'rgba(0,102,255,0.35)',
          text: '#F0F0F0',
          'text-muted': '#666666',
          border: 'rgba(255,255,255,0.08)',
          'border-blue': 'rgba(0,102,255,0.3)',
        },
      },
      fontFamily: {
        mono: ['"Geist Mono"', '"JetBrains Mono"', 'monospace'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'blink': 'blink 1.2s step-end infinite',
        'grid-draw': 'grid-draw 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 4s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
