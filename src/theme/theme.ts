import { createTheme } from '@mui/material';
import { primary12, primary2, primary4, primary5, primary6 } from './constants';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
    allVariants: {
      color: '#383838'
    },
    h1: {
      fontSize: '1.7rem',
      fontWeight: 700,
      color: primary2
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
      fontSize: '0.8rem',
      fontWeight: 600,
      marginBottom: '8px',
      color: primary6
    }
  },
  palette: {
    primary: {
      light: '#D4F3F7',
      main: primary5,
      dark: primary4,
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
          fontSize: '12px',
          marginBottom: '10px'
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
      styleOverrides: {
        root: {
          padding: '15px 25px',
          textTransform: 'capitalize',
          borderRadius: '10px'
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
          backgroundColor: 'red'
        }
      }
    }
  }
});

export default theme;
