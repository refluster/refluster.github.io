import { createTheme, ThemeOptions } from '@mui/material/styles';

// Monochrome, editorial look: near-black ink on warm off-white paper.
// Everything that used to be hard-coded as '#000' / '#fafafa' / '#eaeaea'
// across the components now comes from here.
export const ink = {
    900: '#111111',
    700: '#3a3a3a',
    500: '#6b6b6b',
    300: '#9e9e9e',
    200: '#d6d6d6',
    100: '#eaeaea',
    50: '#f6f6f4',
    0: '#ffffff',
};

export const themeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: { main: ink[900], contrastText: ink[0] },
        secondary: { main: ink[500] },
        background: { default: ink[50], paper: ink[0] },
        text: { primary: ink[900], secondary: ink[500] },
        divider: ink[100],
    },
    typography: {
        fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', 'Hiragino Sans', 'Noto Sans JP', sans-serif",
        h1: { fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.15 },
        h2: { fontWeight: 500, letterSpacing: '-0.015em', lineHeight: 1.2 },
        h3: { fontWeight: 500, letterSpacing: '-0.01em', lineHeight: 1.25 },
        h5: { fontWeight: 500, lineHeight: 1.3 },
        body1: { lineHeight: 1.8 },
        overline: { letterSpacing: '0.18em', fontWeight: 500 },
        button: { textTransform: 'none', fontWeight: 500 },
    },
    shape: { borderRadius: 4 },
    spacing: 8,
    components: {
        MuiButton: {
            defaultProps: { disableElevation: true },
            styleOverrides: {
                root: { textTransform: 'none' },
                contained: {
                    '&:hover': { backgroundColor: ink[700] },
                },
                outlined: {
                    borderColor: ink[200],
                    color: ink[900],
                    '&:hover': { borderColor: ink[900], backgroundColor: 'rgba(0,0,0,0.03)' },
                },
                text: {
                    color: ink[900],
                    '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: { borderRadius: 4, fontWeight: 400 },
            },
        },
        MuiLink: {
            defaultProps: { underline: 'hover' },
            styleOverrides: {
                root: { color: ink[900], textDecorationColor: ink[300] },
            },
        },
    },
};

export const customTheme = createTheme(themeOptions);
