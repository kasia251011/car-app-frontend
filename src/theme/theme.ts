import { createTheme } from '@mui/material';
import { primary11, primary2, primary4, primary5 } from './constants';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
    allVariants: {
      color: '#383838'
    },
    h2: {
      fontSize: '1.25rem',
      fontWeight: 700,
      marginBottom: '20px'
    },
    h3: {
      fontSize: '0.8rem',
      fontWeight: 600,
      marginBottom: '8px',
      color: '#08272B'
    }
  },
  palette: {
    primary: {
      light: '#D4F3F7',
      main: primary5,
      dark: primary2,
      contrastText: '#fff'
    }
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: primary11,
          borderRadius: '8px',
          width: '80%',
          height: '37px',
          padding: '0 7px',
          color: primary4,
          fontSize: '14px'
        }
      }
    }
  }
});

export default theme;
