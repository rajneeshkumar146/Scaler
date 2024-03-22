import React from 'react'
import { useContext } from 'react';
import "./themeManager.css";
import { ThemeWrapper } from "./ThemeManager"

function Footer() {
    return (
        <div style={{ border: "1px solid", padding: "1rem", margin: "1rem" }}>
            <div>Footer</div>
            <div>⬇</div>
            <Option></Option>
            <Option></Option>
            <Option></Option>
            <div>-------------------------------------</div>
        </div>
    )
}

function Option() {
    // 3
    const { CurrTheme } = useContext(ThemeWrapper);
    return <div className={CurrTheme}>Option</div>
}

export default Footer