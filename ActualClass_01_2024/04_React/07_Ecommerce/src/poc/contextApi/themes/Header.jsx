import React from 'react'
import { useContext } from 'react';
import "./themeManager.css";
import { ThemeWrapper } from "./ThemeManager"
function Header() {
    return (
        <div style={{ border: "1px solid", padding: "1rem", margin: "1rem" }}>
            <div>Header</div>
            <div>⬇</div>
            <Option></Option>
            <Option></Option>
            <Option></Option>
            <div>-------------------------------------</div>
        </div>
    )
}

function Option() {
    const { CurrTheme } = useContext(ThemeWrapper);
    console.log("Rajneesh:", CurrTheme)
    return <div className={CurrTheme}>Option</div>
}

export default Header