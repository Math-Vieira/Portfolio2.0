import React, { createContext, useState } from "react";
import { darkTheme, ThemeType } from "../themes/themes";
import { ThemeProvider } from "styled-components";
//TODO Add another theme

type PropsType = {
    children: React.ReactNode;
};

type Context = ThemeType;

const initialContextState: Context = darkTheme;
export const AppContext = createContext<Context>(initialContextState);

export const AppContextProvider = ({ children }: PropsType) => {
    const [theme, setTheme] = useState<ThemeType>(darkTheme);
    return (
        <AppContext.Provider value={{ ...theme }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppContext.Provider>
    );
};
