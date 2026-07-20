'use client';

import { useEffect } from 'react';




export default function PageElementModifier() {
    let CTRL_KEY_DOWN = false;
    let Y_KEY_DOWN = false;

    // TODO is there a type for the keystroke event?
    useEffect(() => {
        const handleKeystrokes = ((e: KeyboardEvent) => {
            if (e.key === 'y' && e.type === "keydown") {
                Y_KEY_DOWN = true;
            } else if (e.key === 'y' && e.type === "keyup") {
                console.log("running statement")
                Y_KEY_DOWN = false;
            } else if (e.key === 'Control' && e.type === "keydown") {
                CTRL_KEY_DOWN = true;
            } else if (e.key === 'Control' && e.type === "keyup") {
                CTRL_KEY_DOWN = false;
            }
        });

        const handleClick = ((e: PointerEvent) => {
            if (Y_KEY_DOWN && CTRL_KEY_DOWN) {
                console.log("Remove Element!");
            }
        })

        window.addEventListener('click', handleClick)
        window.addEventListener('keydown', handleKeystrokes)
        window.addEventListener('keyup', handleKeystrokes)
    }, [])

    
    return(
        <>
            <p>TODO Add demo here!</p>
        </>
    )
}