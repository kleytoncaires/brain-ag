export const theme = {
  colors: {
    primary: '#2d5016',
    secondary: '#4a7c2c',
    success: '#00ff00',
    error: '#ff0000',
    warning: '#ffff00',
    info: '#00ffff',

    orange: '#F2892B',
    lightOrange: '#EA582B',
    cyan: '#72CCD5',

    gray: {
      50: '#fafaf9',
      100: '#e7e5e4',
      200: '#a8a29e',
      900: '#1c1917',
    },

    background: {
      default: '#FFFFFF',
      paper: '#fafaf9',
      dark: '#1c1917',
    },

    text: {
      primary: '#1c1917',
      secondary: '#57534e',
      disabled: '#a8a29e',
      white: '#FFFFFF',
    },
  },

  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },

  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    full: '9999px',
  },

  fontSize: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '24px',
    xxl: '32px',
  },

  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  },

  transitions: {
    fast: '150ms ease-in-out',
    normal: '300ms ease-in-out',
    slow: '500ms ease-in-out',
  },

  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px',
  },
};

export type Theme = typeof theme;
