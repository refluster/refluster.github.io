import { createTheme } from '@mui/material';

export const themeOptions = {
    palette: {
        type: 'dark',
        primary: {
            main: '#fafafa',
        },
        secondary: {
            main: '#f50057',
        },
    },
    spacing: 8,
};

export const customTheme = createTheme(themeOptions);
