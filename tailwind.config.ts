import { type Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config = {
  content: ['./src/**/*.{astro,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      colors: {
        primary: '#6919FF',
        neutrals: {
          900: '#060918',
          800: '#161A2C',
          700: '#23263B',
          600: '#2E364F',
          500: '#4D5775',
          400: '#6F7A9B',
          300: '#96A1C0',
          200: '#C7D0E5',
          100: '#F0F2FE',
          50: '#FFFEF9',
        },
        success: '#00F090',
        warning: '#FFDC30',
        error: '#FF2E5B',
      },
      borderWidth: {
        0.5: '0.5px',
      },
      minHeight: {
        /* @ts-ignore - required fallback for incremental adoption */
        screen: ['100vh', '100svh'],
      },
      maxHeight: {
        /* @ts-ignore - required fallback for incremental adoption */
        screen: ['100vh', '100svh'],
      },
      height: {
        /* @ts-ignore - required fallback for incremental adoption */
        screen: ['100vh', '100svh'],
      },
      backgroundImage: {
        'radial-highlight':
          'radial-gradient(circle at 50% 100%, rgba(46, 54, 79, 0.5) 1%, rgba(6, 9, 24, 1) 100%)',
      },
      keyframes: {
        glitch: {
          '10.5263%': {
            clip: 'rect(65px, 9999px, 200px, 0)',
          },
          '15.7895%': {
            clip: 'rect(8px, 9999px, 200px, 0)',
          },
          '21.0526%': {
            clip: 'rect(51px, 9999px, 159px, 0)',
          },
          '26.3158%': {
            clip: 'rect(6px, 9999px, 82px, 0)',
          },
          '31.5789%': {
            clip: 'rect(1px, 9999px, 106px, 0)',
          },
          '36.8421%': {
            clip: 'rect(17px, 9999px, 69px, 0)',
          },
          '42.1053%': {
            clip: 'rect(65px, 9999px, 144px, 0)',
          },
          '47.3684%': {
            clip: 'rect(1px, 9999px, 91px, 0)',
          },
          '52.6316%': {
            clip: 'rect(18px, 9999px, 209px, 0)',
          },
          '57.8947%': {
            clip: 'rect(14px, 9999px, 175px, 0)',
          },
          '63.1579%': {
            clip: 'rect(61px, 9999px, 107px, 0)',
          },
          '68.4211%': {
            clip: 'rect(73px, 9999px, 178px, 0)',
          },
          '73.6842%': {
            clip: 'rect(53px, 9999px, 207px, 0)',
          },
          '78.9474%': {
            clip: 'rect(33px, 9999px, 199px, 0)',
          },
          '84.2105%': {
            clip: 'rect(73px, 9999px, 144px, 0)',
          },
          '89.4737%': {
            clip: 'rect(79px, 9999px, 163px, 0)',
          },
          '94.7369%': {
            clip: 'rect(1px, 9999px, 76px, 0)',
          },
          '100%': {
            clip: 'rect(64px, 9999px, 117px, 0)',
          },
        },
        marquee: {
          to: {
            transform: 'translateX(-100%)',
          },
        },
        'dialog-overlay-show': {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        'dialog-overlay-hide': {
          from: {
            opacity: '1',
          },
          to: {
            opacity: '0',
          },
        },
        'shiny-badge-slide': {
          '0%': {
            transform: 'translateX(-100%) skewX(-16deg)',
          },
          '15%, 100%': {
            transform: 'translateX(100%) skewX(-16deg)',
          },
        },
        jiggle: {
          from: {
            transform: 'skewX(0deg) skewY(0deg)',
          },
          '50%': {
            transform: 'skewX(-6deg) skewY(-6deg)',
          },
          to: {
            transform: 'skewX(0deg) skewY(0deg)',
          },
        },
      },
      animation: {
        'glitch-1': 'glitch 4s linear infinite alternate-reverse',
        'glitch-2': 'glitch 2s linear infinite alternate-reverse',
        marquee: 'marquee 35s linear infinite',
        'dialog-overlay-show': 'dialog-overlay-show 0.5s',
        'dialog-overlay-hide': 'dialog-overlay-hide 0.5s',
        'shiny-badge-slide': 'shiny-badge-slide 6s infinite',
        jiggle: 'jiggle 0.6s cubic-bezier(0.85, 0, 0.15, 1)',
      },
      typography: ({ theme }: { theme: (key: string) => string }) => ({
        primary: {
          css: {
            '--tw-prose-links': theme('colors.primary'),
            '--tw-prose-invert-links': theme('colors.primary'),
          },
        },
        neutrals: {
          css: {
            '--tw-prose-body': theme('colors.neutrals[300]'),
            '--tw-prose-headings': theme('colors.neutrals[50]'),
            '--tw-prose-lead': theme('colors.neutrals[400]'),
            '--tw-prose-bold': theme('colors.neutrals[100]'),
            '--tw-prose-counters': theme('colors.neutrals[400]'),
            '--tw-prose-bullets': theme('colors.neutrals[600]'),
            '--tw-prose-hr': theme('colors.neutrals[700]'),
            '--tw-prose-quotes': theme('colors.neutrals[100]'),
            '--tw-prose-quote-borders': theme('colors.neutrals[600]'),
            '--tw-prose-captions': theme('colors.neutrals[400]'),
            '--tw-prose-kbd': theme('colors.neutrals[100]'),
            '--tw-prose-code': theme('colors.neutrals[100]'),
            '--tw-prose-pre-code': theme('colors.neutrals[300]'),
            '--tw-prose-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-th-borders': theme('colors.neutrals[600]'),
            '--tw-prose-td-borders': theme('colors.neutrals[700]'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;

export default config;
