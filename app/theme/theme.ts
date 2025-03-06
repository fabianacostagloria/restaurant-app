export const theme = {
    colors: {
      primary: '#ff4444',
      secondary: '#666666',
      background: '#ffffff',
      text: '#000000',
      textSecondary: '#666666',
      border: '#e0e0e0',
      success: '#4CAF50',
      error: '#f44336',
      warning: '#ff9800',
      info: '#2196f3',
    },
    spacing: {
        z: 0,
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
      xxl: 40,
    },
    typography: {
      fontSize: {
        small: 12,
        regular: 14,
        medium: 16,
        large: 18,
        xlarge: 24,
        xxlarge: 32,
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      lineHeight: {
        small: 16,
        regular: 20,
        medium: 24,
        large: 28,
        xlarge: 32,
      },
    },
    borderRadius: {
      small: 4,
      medium: 8,
      large: 16,
      xl: 24,
      circle: 9999,
    },
    shadows: {
      small: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 1,
      },
      medium: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
      },
      large: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 6,
      },
    },
    layout: {
      containerPadding: 16,
      maxContentWidth: 1200,
      imageHeight: {
        small: 100,
        medium: 200,
        large: 300,
    },
    size100: "100%",
  },
} as const;

  export type Theme = typeof theme; 