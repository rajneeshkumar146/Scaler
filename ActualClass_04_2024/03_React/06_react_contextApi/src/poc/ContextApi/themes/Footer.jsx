import React from 'react'
import { useContext } from 'react';
import { ThemeWrapper } from './ThemeManager';
import "./themeManager.css";

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
    const {currTheme} = useContext(ThemeWrapper);
    // console.log("Rajneesh1: ", currTheme);
    return <div className={currTheme}>Option</div>
}

export default Footer