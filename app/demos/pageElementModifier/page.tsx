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
                Y_KEY_DOWN = false;
            } else if (e.key === 'Control' && e.type === "keydown") {
                CTRL_KEY_DOWN = true;
            } else if (e.key === 'Control' && e.type === "keyup") {
                CTRL_KEY_DOWN = false;
            }
        });

        const handleClick = ((e: PointerEvent) => {
            e.stopImmediatePropagation();

            console.log(e);

            if (Y_KEY_DOWN && CTRL_KEY_DOWN) {
                // TODO Change logic to ignore things with certain tags!
                // @ts-expect-error
                e.target.style.display = 'none';
            }
        })

        window.addEventListener('click', handleClick)
        window.addEventListener('keydown', handleKeystrokes)
        window.addEventListener('keyup', handleKeystrokes)
    }, [])

    
    return(
        <div className="viewport-container">
            <div className="browser-window">
                <div className="fake-ad top-ad">
                <h3>🔥 MEGA SALE! CLICK HERE! 🔥</h3>
                <p>Don't miss out on this totally real offer!</p>
                </div>
                <div className="fake-ad left-ad">
                <h4>BUY<br/>NOW</h4>
                <p>50% OFF</p>
                </div>
                <div className="fake-ad right-ad">
                <h4>LOSE<br/>WEIGHT<br/>FAST!</h4>
                <p>Doctors hate this!</p>
                </div>

                {/* Main Chrome UI */}
                <main className="main-content">
                <div className="logo-container">
                    <span className="logo-letter blue">W</span>
                    <span className="logo-letter red">e</span>
                    <span className="logo-letter yellow">b</span>
                    <span className="logo-letter blue">s</span>
                    <span className="logo-letter green">i</span>
                    <span className="logo-letter yellow">t</span>
                    <span className="logo-letter red">e</span>
                </div>

                <div className="search-container">
                    <div className="search-icon">🔍</div>
                    <input 
                        type="text" 
                        className="search-input" 
                        placeholder="Search Google or type a URL" 
                    />
                    <div className="mic-icon">🎤</div>
                </div>

                <div className="shortcuts-grid">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                    <div key={item} className="shortcut-item">
                        <img className="shortcut-images" src={"/loadingScreen.png"} alt="Logo" />
                    </div>
                    ))}
                </div>
                </main>
            </div>

            {/* All styling kept at the bottom of the file */}
            <style jsx>{`
                :global(body) {
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                background-color: #111; /* Dark backdrop for the whole screen */
                color: white;
                overflow: hidden;
                }

                /* --- OUTER VIEWPORT --- */
                .viewport-container {
                min-height: 100vh;
                width: 100vw;
                display: flex;
                align-items: center;
                justify-content: center;
                }

                /* --- 60% BLACK BROWSER WINDOW --- */
                .browser-window {
                position: relative;
                width: 60vw;
                height: 60vh;
                background-color: black; /* Requested black background */
                border: 1px solid #333;
                border-radius: 12px;
                box-shadow: 0 20px 50px rgba(0,0,0,0.8);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                overflow: hidden; /* Keeps ads from spilling out */
                }

                /* --- FAKE ADS STYLING --- */
                .fake-ad {
                position: absolute; /* Relative to the .browser-window */
                background: #ffff00;
                color: red;
                border: 3px dashed red;
                z-index: 9999;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;
                animation: flash 1s infinite alternate;
                box-shadow: 0 5px 15px rgba(0,0,0,0.5);
                padding: 10px;
                box-sizing: border-box;
                }

                .fake-ad h3, .fake-ad h4, .fake-ad p {
                margin: 0;
                padding: 2px;
                }

                .fake-ad p {
                font-size: 0.75rem;
                color: black;
                font-weight: bold;
                }

                /* Ad sizing percentages based on the 60% window */
                .top-ad {
                top: 0;
                left: 0;
                width: 100%;
                height: 20%;
                }

                .left-ad {
                top: 20%;
                left: 0;
                width: 25%;
                height: 80%;
                }

                .right-ad {
                top: 20%;
                right: 0;
                width: 25%;
                height: 80%;
                }

                @keyframes flash {
                0% { background-color: #ffff00; }
                100% { background-color: #ff9900; }
                }

                /* --- CHROME MAIN UI STYLING (Scaled down) --- */
                .main-content {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 45%; /* Squeezed between the left and right ads */
                max-width: 400px;
                margin-top: 5%; /* Pushed down slightly from the top ad */
                z-index: 1; /* Keep underneath ads if they overlap */
                }

                .logo-container {
                font-size: 3.5rem; /* Scaled down */
                font-weight: 500;
                letter-spacing: -2px;
                margin-bottom: 20px;
                }

                .blue { color: #4285f4; }
                .red { color: #ea4335; }
                .yellow { color: #fbbc05; }
                .green { color: #34a853; }

                .search-container {
                display: flex;
                align-items: center;
                width: 100%;
                background-color: #303134;
                border: 1px solid #5f6368;
                border-radius: 24px;
                padding: 0 14px;
                height: 40px; /* Scaled down */
                margin-bottom: 30px;
                }

                .search-icon, .mic-icon {
                font-size: 1rem;
                opacity: 0.7;
                }

                .search-input {
                flex: 1;
                background: transparent;
                border: none;
                color: white;
                font-size: 0.9rem;
                padding: 0 10px;
                outline: none;
                min-width: 0; /* Prevents overflow */
                }

                .shortcuts-grid {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 10px;
                    width: 150%;
                }

                .shortcut-images {
                    width: 125%
                    height: 125%
                }

                .shortcut-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 10px 5px;
                border-radius: 4px;
                }

                .shortcut-icon {
                width: 36px; /* Scaled down */
                height: 36px;
                background-color: #303134;
                border-radius: 50%;
                margin-bottom: 10px;
                }

                .shortcut-label {
                font-size: 0.7rem;
                color: #e8eaed;
                white-space: nowrap;
                }
            `}</style>
        </div>
    )
}