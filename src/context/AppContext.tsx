import React, { createContext, useState } from "react";
import { darkTheme, ThemeType } from "../themes/themes";
import { ThemeProvider } from "styled-components";
import { RequestStates } from "../hooks/useAxios";
import useAxios from "../hooks/useAxios";
//TODO Add another theme
//TODO Implement the fetch end point

type PropsType = {
	children: React.ReactNode;
};

type Context = ThemeType & RequestStates;

const initialContextState: Context = {
	...darkTheme,
	data: null,
	loading: null,
	error: null,
};

export const AppContext = createContext<Context>(initialContextState);

export const AppContextProvider = ({ children }: PropsType) => {
	const [theme, setTheme] = useState<ThemeType>(darkTheme);
	const { data, loading, error, request } = useAxios();

	return (
		<AppContext.Provider value={{ ...theme, data, loading, error}}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</AppContext.Provider>
	);
};
