import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#2E7D32',
          light: '#66BB6A',
          dark: '#1B5E20',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#6D4C41',
          light: '#A1887F',
          dark: '#4E342E',
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#81C784',
          light: '#C8E6C9',
          dark: '#388E3C',
        },
        sky: {
          light: '#E3F2FD',
          DEFAULT: '#B3E5FC',
          dark: '#81D4FA',
        },
        earth: {
          light: '#EFEBE9',
          DEFAULT: '#D7CCC8',
          dark: '#BCAAA4',
        },
        cream: {
          DEFAULT: '#FFF8E1',
          dark: '#FFECB3',
        },
        warm: {
          bg: '#FAFAF5',
          card: '#FFFFFF',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        destructive: {
          DEFAULT: '#DC2626',
          foreground: '#FFFFFF',
        },
      },
      fontFamily: {
        hebrew: ['var(--font-heebo)', 'Heebo', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        lg: '0.75rem',
        md: '0.5rem',
        sm: '0.25rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
