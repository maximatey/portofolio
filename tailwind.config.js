/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: { '2xl': '1400px' },
    },
    extend: {
      colors: {
        /* ── shadcn semantic (CSS variables) ── */
        border:     'hsl(var(--border))',
        input:      'hsl(var(--input))',
        ring:       'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT:    'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT:    'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT:    'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT:    'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT:    'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        card: {
          DEFAULT:    'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        /* ── Portfolio palette ── */
        cream:           '#FAFAF7',
        sand:            '#F4F1EB',
        sandy:           '#EDE8DE',
        ink:             '#1A1A2E',
        'ink-soft':      '#2D2D44',
        subdued:         '#6B6B80',
        bronze:          '#B5865A',
        amethyst:        '#7C6FAD',
        'bronze-tint':   '#F0E8DC',
        pebble:          '#E0DAD0',
        'pebble-dark':   '#D4CCBF',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter:    ['Inter', 'sans-serif'],
        mono:     ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        'card-hover': '0 20px 60px rgba(26,26,46,0.12)',
        'bronze-glow': '0 8px 24px rgba(181,134,90,0.30)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to:   { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to:   { height: '0' },
        },
        floatA: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '50%':     { transform: 'translate(20px,20px) scale(1.08)' },
        },
        floatB: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '50%':     { transform: 'translate(-20px,-15px) scale(1.06)' },
        },
        pulseGlow: {
          '0%,100%': { boxShadow: '0 0 0 4px rgba(181,134,90,0.22)' },
          '50%':     { boxShadow: '0 0 0 9px rgba(181,134,90,0.06)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0' },
        },
        scrollLine: {
          '0%,100%': { opacity: '1', transform: 'scaleY(1)' },
          '50%':     { opacity: '0.3', transform: 'scaleY(0.55)' },
        },
        badgeDot: {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%':     { opacity: '0.5', transform: 'scale(1.5)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          from: { opacity: '0', transform: 'translateY(-12px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
      },
      animation: {
        'float-a':     'floatA 8s ease-in-out infinite alternate',
        'float-b':     'floatB 10s ease-in-out infinite alternate',
        'pulse-glow':  'pulseGlow 2s ease-in-out infinite',
        blink:         'blink 1s step-end infinite',
        'scroll-line': 'scrollLine 1.8s ease-in-out infinite',
        'badge-dot':   'badgeDot 1.8s ease-in-out infinite',
        'fade-up-1':   'fadeUp 0.8s 0.05s ease both',
        'fade-up-2':   'fadeUp 0.8s 0.18s ease both',
        'fade-up-3':   'fadeUp 0.8s 0.31s ease both',
        'fade-up-4':   'fadeUp 0.8s 0.44s ease both',
        'fade-up-5':   'fadeUp 0.8s 0.57s ease both',
        'fade-down':   'fadeDown 0.6s ease both',
        'fade-in':     'fadeIn 1.5s 1s ease both',
      },
    },
  },
  plugins: [],
}
