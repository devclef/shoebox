import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
      950: '#0e384e',
    },
    accent: {
      50: '#fdf4ff',
      100: '#fae8ff',
      200: '#f5d0fe',
      300: '#f0abfc',
      400: '#e879f9',
      500: '#d946ef',
      600: '#c026d3',
      700: '#a21caf',
      800: '#86198f',
      900: '#701a75',
      950: '#4a0b4f',
    },
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
      950: '#052e16',
    },
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
      950: '#451a03',
    },
    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
      950: '#450a0a',
    },
    gradient: {
      brand: 'linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)',
      accent: 'linear-gradient(135deg, #d946ef 0%, #a21caf 100%)',
      sunset: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
      ocean: 'linear-gradient(135deg, #0ea5e9 0%, #0c4a6e 100%)',
    },
  },
  fonts: {
    heading: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: '"Fira Code", "JetBrains Mono", "Consolas", monospace',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },
  fontWeights: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
  lineHeights: {
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  spacing: {
    ...{
      '0': '0px',
      '0.5': '0.125rem',
      '1': '0.25rem',
      '1.5': '0.375rem',
      '2': '0.5rem',
      '2.5': '0.625rem',
      '3': '0.75rem',
      '3.5': '0.875rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
      '11': '2.75rem',
      '12': '3rem',
      '14': '3.5rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '28': '7rem',
      '32': '8rem',
      '36': '9rem',
      '40': '10rem',
      '44': '11rem',
      '48': '12rem',
      '52': '13rem',
      '56': '14rem',
      '60': '15rem',
      '64': '16rem',
      '72': '18rem',
      '80': '20rem',
      '96': '24rem',
    },
  },
  sizes: {
    'screen-sm': '640px',
    'screen-md': '768px',
    'screen-lg': '1024px',
    'screen-xl': '1280px',
    'screen-2xl': '1536px',
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    '4xl': '2rem',
    full: '9999px',
  },
  styles: {
    global: {
      body: {
        bg: {
          _light: 'gray.50',
          _dark: 'gray.900',
        },
        color: {
          _light: 'gray.900',
          _dark: 'gray.100',
        },
      },
      '*::selection': {
        bg: 'brand.500',
        color: 'white',
      },
      // Native <select>, <option>, and <datalist> need explicit styling for dark mode
      // because browsers ignore inherited CSS custom properties for these elements.
      select: {
        bg: {
          _light: 'white',
          _dark: 'gray.800',
        },
        color: {
          _light: 'gray.900',
          _dark: 'gray.100',
        },
      },
      option: {
        bg: {
          _light: 'white',
          _dark: 'gray.800',
        },
        color: {
          _light: 'gray.900',
          _dark: 'gray.100',
        },
      },
      datalist: {
        bg: {
          _light: 'white',
          _dark: 'gray.800',
        },
        color: {
          _light: 'gray.900',
          _dark: 'gray.100',
        },
      },
    },
  },
  shadows: {
    'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
    'card-hover': '0 8px 24px rgba(0, 0, 0, 0.12)',
    'glow': '0 0 20px rgba(14, 165, 233, 0.3)',
    'glow-dark': '0 0 20px rgba(14, 165, 233, 0.5)',
    'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    'outline': '0 0 0 3px rgba(14, 165, 233, 0.5)',
    'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  components: {
    Button: {
      variants: {
        gradient: {
          bg: 'linear-gradient(135deg, brand.500, brand.700)',
          color: 'white',
          _hover: {
            bg: 'linear-gradient(135deg, brand.600, brand.800)',
            transform: 'translateY(-1px)',
            boxShadow: 'glow',
          },
          _active: {
            transform: 'translateY(0)',
          },
        },
        outline: {
          border: '2px solid',
          borderColor: 'brand.500',
          color: 'brand.500',
          _hover: {
            bg: 'brand.50',
          },
          _dark: {
            _hover: {
              bg: 'brand.900',
            },
          },
        },
      },
      baseStyle: {
        borderRadius: 'xl',
        fontWeight: '600',
        transition: 'all 0.2s ease',
        outline: 'none',
      },
      sizes: {
        sm: {
          h: '8',
          minH: '8',
          fontSize: 'sm',
          px: '3',
        },
        md: {
          h: '10',
          minH: '10',
          fontSize: 'md',
          px: '4',
        },
        lg: {
          h: '12',
          minH: '12',
          fontSize: 'lg',
          px: '6',
        },
      },
    },
    Input: {
      variants: {
        outlined: {
          field: {
            borderRadius: 'xl',
            transition: 'all 0.2s ease',
            _focus: {
              boxShadow: '0 0 0 2px brand.300',
              borderColor: 'brand.500',
            },
            _dark: {
              _focus: {
                boxShadow: '0 0 0 2px brand.700',
              },
            },
          },
        },
      },
      baseStyle: {
        field: {
          borderRadius: 'xl',
          transition: 'all 0.2s ease',
          bg: {
            _light: 'white',
            _dark: 'gray.800',
          },
          color: {
            _light: 'gray.900',
            _dark: 'gray.100',
          },
        },
      },
    },
    Select: {
      variants: {
        outlined: {
          field: {
            borderRadius: 'xl',
            transition: 'all 0.2s ease',
            bg: {
              _light: 'white',
              _dark: 'gray.800',
            },
            color: {
              _light: 'gray.900',
              _dark: 'gray.100',
            },
            _focus: {
              boxShadow: '0 0 0 2px brand.300',
              borderColor: 'brand.500',
            },
            _dark: {
              _focus: {
                boxShadow: '0 0 0 2px brand.700',
              },
            },
          },
        },
      },
      baseStyle: {
        field: {
          borderRadius: 'xl',
          transition: 'all 0.2s ease',
          bg: {
            _light: 'white',
            _dark: 'gray.800',
          },
          color: {
            _light: 'gray.900',
            _dark: 'gray.100',
          },
        },
      },
    },
    Textarea: {
      variants: {
        outlined: {
            field: {
              borderRadius: 'xl',
              transition: 'all 0.2s ease',
              bg: {
                _light: 'white',
                _dark: 'gray.800',
              },
              color: {
                _light: 'gray.900',
                _dark: 'gray.100',
              },
              _focus: {
                boxShadow: '0 0 0 2px brand.300',
                borderColor: 'brand.500',
              },
              _dark: {
                _focus: {
                  boxShadow: '0 0 0 2px brand.700',
                },
              },
            },
          },
      },
      baseStyle: {
        field: {
          borderRadius: 'xl',
          transition: 'all 0.2s ease',
          bg: {
            _light: 'white',
            _dark: 'gray.800',
          },
          color: {
            _light: 'gray.900',
            _dark: 'gray.100',
          },
        },
      },
    },
    Badge: {
      variants: {
        gradient: {
          bg: 'linear-gradient(135deg, brand.500, brand.700)',
          color: 'white',
          fontWeight: '500',
        },
        subtle: {
          bg: 'brand.100',
          color: 'brand.700',
          _dark: {
            bg: 'brand.900',
            color: 'brand.300',
          },
        },
      },
      baseStyle: {
        borderRadius: 'md',
        fontWeight: '500',
      },
    },
    Alert: {
      variants: {
        solid: {
          container: {
            bg: 'brand.500',
            color: 'white',
            iconColor: 'white',
          },
        },
      },
      baseStyle: {
        container: {
          borderRadius: 'xl',
        },
      },
    },
    Drawer: {
      variants: {
        modern: {
          content: {
            borderRadius: 'xl',
            boxShadow: 'xl',
          },
        },
      },
    },
    Modal: {
      variants: {
        modern: {
          dialog: {
            borderRadius: '2xl',
            boxShadow: 'xl',
          },
        },
      },
      sizes: {
        md: {
          container: {
            md: {
              maxWidth: '48rem',
            },
          },
        },
      },
    },
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  opacity: {
    0: '0',
    5: '0.05',
    10: '0.1',
    20: '0.2',
    25: '0.25',
    30: '0.3',
    40: '0.4',
    50: '0.5',
    60: '0.6',
    70: '0.7',
    75: '0.75',
    80: '0.8',
    90: '0.9',
    95: '0.95',
    100: '1',
  },
  zIndices: {
    hide: -1,
    auto: 'auto',
    base: 0,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
});

export default theme;
