import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import { useState } from "react";
import React from "react";

export const ProvideTheme = React.createContext();

const AppTheme = ({ children }) => {
    //theme mode
    const [mode, setMode] = useState("dark");

    //generate app theme
    let theme = createTheme(mode === "dark" ? lightMode() : darkMode());

    return (
        <ProvideTheme.Provider value={{ mode, setMode }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ProvideTheme.Provider>
    );
}

//app theme for lightmode
const lightMode = () => {
    return {
        palette: {
            mode: 'light',
            primary: {
                main: '#e95e3b',
            },
            secondary: {
                main: '#000000',
            },
            background: {
                default: "#fafafa",
                paper: "#ded8d8",
            }
        },
        typography: {
            h1: {
                fontFamily: 'Josefin Sans',
            },
            h2: {
                fontFamily: 'Bodoni Moda',
            },
            h3: {
                fontFamily: 'DM Serif Text',
            },
            subtitle1: {
                fontFamily: 'Open Sans',
            },
            subtitle2: {
                fontFamily: 'Kanit',
            },
            button: {
                fontFamily: "'Source Sans 3'",
            },
            body1: {
                fontFamily: "'Source Sans 3'",
            },
        },
    }
}
//app theme for darkmode
const darkMode = () => {
    return {
        palette: {
            mode: 'dark',
            primary: {
                main: '#e95e3b',
            },
            secondary: {
                main: '#000000',
            },
            background: {
                default: '#040404',
                paper: "#141313",
            },
        },
        typography: {
            h1: {
                fontFamily: 'Reem Kufi',
            },
            h2: {
                fontFamily: 'Bodoni Moda',
            },
            h3: {
                fontFamily: 'DM Serif Text',
            },
            subtitle1: {
                fontFamily: 'Open Sans',
            },
            button: {
                fontFamily: "'Source Sans 3'",
            },
            body1: {
                fontFamily: "'Source Sans 3'",
            },
        },
    }
}

export default AppTheme;