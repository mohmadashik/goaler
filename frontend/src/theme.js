import {createTheme} from '@mui/material/styles';

const theme = createTheme ({
    palette: {
        primary : {
            main:'#1976d2',
        },
        secondary: {
            main : '#dc004e',
        },
    },
    typography: {
        fontFamily: "Freeman",
        h1: {
            fontFamily : "Freeman",
            fontSize : '3rem',
        },
        h2: {
            fontFamily : "Freeman",
            fontSize: '1.5rem', // Adjust the font size as needed
            fontWeight: 500, // Adjust the font weight as needed
            lineHeight: 1.2, // Adjust the line height as needed
            // Add any other typography styles for the h2 variant
          },
    },
});

export default theme;