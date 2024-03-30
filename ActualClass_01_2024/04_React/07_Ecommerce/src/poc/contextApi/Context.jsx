import React from 'react'
import { useContext } from 'react';

// 1
const ContextWrapper = React.createContext();
function Context() {
    return (
        <>
            <ContextWrapper.Provider value="Be safe">
                <GrandParent />
            </ContextWrapper.Provider>
        </>

    )
}

function GrandParent() {
    return <>
        <h2>Grand Parent</h2>
        <div>⬇</div>
        <Parent />
    </>
}

function Parent() {
    return <>
        <h2>Parent</h2>
        <div>⬇</div>
        <Children />
    </>
}

function Children() {
    const message = useContext(ContextWrapper);
    return <>
        <h2>Children</h2>
        <div>⬇</div>
        <div>{message}</div>
    </>
}

export default Context