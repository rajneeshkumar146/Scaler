import React from 'react'
import { useState } from 'react';
import Article from './Article'
import Footer from './Footer'
import Header from './Header'

// 1
export const ThemeWrapper = React.createContext();
function ThemeManager() {
    const [CurrTheme, setCurrTheme] = useState("light");
    const toggleTheme = () => {
        const newTheme = CurrTheme.localeCompare("light") == 0 ? "dark" : "light";
        setCurrTheme(newTheme)
    }
    return (
        <ThemeWrapper.Provider value={{ CurrTheme }}>
            <h1>Theme Manager</h1>
            <button
                onClick={toggleTheme}
            >
                Toggle Theme
            </button>
            <Header />
            <Footer />
            <Article />
        </ThemeWrapper.Provider>
    )
}

export default ThemeManager