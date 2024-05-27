import React from 'react'
import Article from './Article'
import Footer from './Footer'
import Header from './Header'

function ThemeManager() {
    return (
        <>
            <h1>Theme Manager</h1>
            <button>Toggle Theme</button>
            <Header />
            <Footer />
            <Article />
        </>
    )
}

export default ThemeManager