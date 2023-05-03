/* eslint-disable no-unused-vars */
import { createTheme } from '@mui/material';
import { primary12, primary2, primary4, primary5, primary6 } from './constants';
import { CSSProperties } from 'react';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    error: CSSProperties;
  }

  // allow configuration using createTheme
  interface TypographyVariantsOptions {
    error?: CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    error: true;
  }
}

declare module '@mui/material/Button' {
  // eslint-disable-next-line no-unused-vars
  interface ButtonPropsVariantOverrides {
    nav: true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
    allVariants: {
      color: '#383838'
    },
    h1: {
      fontSize: '2.7rem',
      fontWeight: 700,
      color: '#313660'
    },
    h2: {
      fontSize: '1.25rem',
      fontWeight: 700,
      marginBottom: '20px'
    },
    h3: {
      fontSize: '0.9rem',
      fontWeight: 700,
      marginBottom: '20px'
    },
    subtitle1: {
      fontSize: '0.9rem',
      fontWeight: 600,
      marginBottom: '8px',
      color: '#6B6D8B'
    },
    error: {
      fontFamily: 'Poppins',
      fontSize: '0.6rem',
      color: 'red'
    }
  },
  palette: {
    primary: {
      light: '#D4F3F7',
      main: '#5351BD',
      dark: '#4644A7',
      contrastText: '#fff'
    }
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: primary12,
          borderRadius: '8px',
          width: '80%',
          height: '37px',
          padding: '0 7px',
          color: primary4,
          fontSize: '12px'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '0.8rem',
          // fontWeight: 600,
          border: 'none'
        }
      }
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            padding: '15px 25px',
            textTransform: 'capitalize',
            borderRadius: '10px'
          }
        },
        {
          props: { variant: 'nav' },
          style: {
            padding: '10px 25px',
            textTransform: 'capitalize',
            borderRadius: '10px',
            height: 'min-content',
            color: '#72758F',
            fontWeight: '600',
            fontSize: '1.1rem'
          }
        }
      ]
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '12px'
        }
      }
    },
    MuiSlider: {
      defaultProps: {
        min: 0,
        max: 1,
        step: 0.1
      },
      styleOverrides: {
        thumb: {
          width: '12px',
          height: '12px'
        },
        mark: {
          backgroundColor: 'transparent'
        },
        markLabel: {
          fontSize: '0.6rem',
          top: '20px',
          position: 'sticky'
        }
      }
    }
  }
});

export default theme;
