/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 浅色调色板
        cream: {
          50: '#fdfcf9',
          100: '#faf7f0',
          200: '#f3ede0',
          300: '#e8dfc9'
        },
        ink: {
          400: '#7a7a7a',
          500: '#4a4a4a',
          600: '#2c2c2c',
          700: '#1a1a1a',
          800: '#0f0f0f'
        },
        accent: {
          // 淡蓝/淡绿点缀
          sky: '#7eb8d6',
          mint: '#a8d5b8',
          sand: '#d4b896'
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'PingFang SC',
          'Hiragino Sans GB',
          'Microsoft YaHei',
          'Inter',
          'system-ui',
          'sans-serif'
        ],
        serif: [
          'Source Han Serif SC',
          'Songti SC',
          'Georgia',
          'serif'
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'Consolas',
          'monospace'
        ]
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.ink.600'),
            '--tw-prose-headings': theme('colors.ink.700'),
            '--tw-prose-lead': theme('colors.ink.500'),
            '--tw-prose-links': theme('colors.accent.sky'),
            '--tw-prose-bold': theme('colors.ink.700'),
            '--tw-prose-counters': theme('colors.ink.400'),
            '--tw-prose-bullets': theme('colors.cream.300'),
            '--tw-prose-hr': theme('colors.cream.200'),
            '--tw-prose-quotes': theme('colors.ink.500'),
            '--tw-prose-quote-borders': theme('colors.accent.sky'),
            '--tw-prose-captions': theme('colors.ink.400'),
            '--tw-prose-code': theme('colors.ink.700'),
            '--tw-prose-pre-code': theme('colors.cream.50'),
            '--tw-prose-pre-bg': theme('colors.cream.100'),
            '--tw-prose-th-borders': theme('colors.cream.300'),
            '--tw-prose-td-borders': theme('colors.cream.200'),
            maxWidth: '70ch',
            a: {
              textDecoration: 'none',
              borderBottom: `1px solid ${theme('colors.accent.sky')}`,
              transition: 'all 0.2s',
              '&:hover': {
                borderBottomColor: 'transparent'
              }
            },
            'h1, h2, h3, h4': {
              fontWeight: '600',
              letterSpacing: '-0.01em'
            },
            code: {
              backgroundColor: theme('colors.cream.100'),
              padding: '0.15em 0.35em',
              borderRadius: '0.25rem',
              fontWeight: '500',
              fontSize: '0.9em'
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
              fontWeight: '400'
            }
          }
        }
      }),
      animation: {
        'fade-in': 'fadeIn 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
        'slide-up': 'slideUp 0.45s cubic-bezier(0.23, 1, 0.32, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
