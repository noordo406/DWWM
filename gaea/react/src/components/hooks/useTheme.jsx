import { createContext, useState } from "react";

export const ThemeContext = createContext('light')

export function ThemeContextProvider({children}) {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return <ThemeContext.Provider value={theme}>
        <button onClick={toggleTheme}>Changer de thème</button>
        {children}
    </ThemeContext.Provider>
}
