import React from 'react'
import { useContext } from 'react';
import { ThemeWrapper } from './ThemeManager';
import "./themeManager.css";
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
    const {currTheme} = useContext(ThemeWrapper);
    return <div className={currTheme}>Option</div>
}

export default Header