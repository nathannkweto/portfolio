import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Define a strict palette
let theme = createTheme({
  palette: {
    primary: {
      main: '#3366FF', // Enterprise Navy
    },
    secondary: {
      main: '#003366', // Tech Blue
    },
    background: {
      default: '#F7F9FC', // Light Gray background
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A2027',
      secondary: '#3E5060',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
  },
  components: {
    // Override global component styles here for consistency
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Avoid shouting text
          borderRadius: 8,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
