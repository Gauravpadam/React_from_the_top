import { createContext, useContext } from "react";

// A context can have some default values
export const themeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

// Just export the themeProvider as a provider
export const ThemeProvider = themeContext.Provider;

// A custom hook for returning the context - no need of importing the context separately
export default function useTheme(){
    return useContext(themeContext)
}

