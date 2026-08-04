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

            // @ts-expect-error
            if (Y_KEY_DOWN && CTRL_KEY_DOWN && e.target.dataset.type) {
                // TODO Change logic to ignore things with certain tags!
                // @ts-expect-error
                e.target.style.display = 'none';
            }
        })

        window.addEventListener('click', handleClick)
        window.addEventListener('keydown', handleKeystrokes)
        window.addEventListener('keyup', handleKeystrokes)
    }, [])

    const refreshDemo = () => {
        window.location.reload();
    }

    
    return(
        <div style={{overflow: "overlay", overflowY: 'auto', overflowX: "hidden"}}>
            {/* <div className="mx-auto w-fit mt-[2.5%] "> */}
            <div className="mx-auto max-w text-left mt-[5%] ml-[20%] mb-[4%]">
                <h1 className='main-font text-5xl font-bold'>The Issue</h1>
                <p className='main-font text-2xl mt-[2.5%]'>
                    On certain websites I noticed that ADs would cover important info! <br />
                    Issue is my AD Blocker would not block these... <br/>
                    So, I came up with a manual solution to this!
                </p>
            </div>
            
            <div className="mx-auto max-w text-left mt-[2.5%] ml-[20%]">
                <h1 className='main-font text-5xl font-bold'>Try it!</h1>
                <p className='main-font text-2xl mt-[2.5%]'>
                    Use the demo below! Use Ctrl + Y and Click to remove the ads to see all 10 animal images! <br/>
                    You can also remove any other element should you like too!
                </p>
            </div>

            <div className='px-4 bg-[#FFFFFF] hover:bg-[#EEEEEE] rounded-xl cursor-pointer flex mx-auto min-h-15 max-w-[15%] items-center justify-center mt-[5%]'>
                <button onClick={refreshDemo} className='text-black cursor-pointer font-bold main-font text-[15px]'>Refresh the demo!</button>
            </div>

            <div className="viewport-container">
                <div className="browser-window">
                    {/* TODO Make this NOT get removed by AD blockers! */}
                    <div className="hehe hehe1" data-type="remove">
                        <h3 data-type="remove">🔥 MEGA SALE! CLICK HERE! 🔥</h3>
                        <p data-type="remove">Don't miss out on this totally real offer!</p>
                    </div>
                        <div className="hehe hehe3" data-type="remove">
                        <h4 data-type="remove">BUY<br/>NOW</h4>
                        <p data-type="remove">50% OFF</p>
                    </div>
                        <div className="hehe hehe2" data-type="remove">
                        <h4 data-type="remove">LOSE<br data-type="remove"/>WEIGHT<br data-type="remove"/>FAST!</h4>
                        <p data-type="remove">Doctors hate this!</p>
                    </div>

                    {/* Main Chrome UI */}
                    <main className="main-content" data-type="remove">
                        <div className="logo-container" data-type="remove">
                            <span className="logo-letter blue" data-type="remove">W</span>
                            <span className="logo-letter red" data-type="remove">e</span>
                            <span className="logo-letter yellow" data-type="remove">b</span>
                            <span className="logo-letter blue" data-type="remove">s</span>
                            <span className="logo-letter green" data-type="remove">i</span>
                            <span className="logo-letter yellow" data-type="remove">t</span>
                            <span className="logo-letter red" data-type="remove">e</span>
                        </div>

                        <div className="shortcuts-grid" data-type="remove">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                            <div key={item} className="shortcut-item" data-type="remove">
                                <img className="shortcut-images" src={`/example_images/${item}.jpg`} alt="Logo" data-type="remove"/>
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
                    }

                    /* --- OUTER VIEWPORT --- */
                    .viewport-container {
                        min-height: 70vh;
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

                    .hehe {
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

                    .hehe h3, .hehe h4, .hehe p {
                        margin: 0;
                        padding: 2px;
                    }

                    .hehe p {
                        font-size: 0.75rem;
                        color: black;
                        font-weight: bold;
                    }

                    .hehe1 {
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 20%;
                    }

                    .hehe3 {
                        top: 20%;
                        left: 0;
                        width: 25%;
                        height: 80%;
                    }

                    .hehe2 {
                        top: 20%;
                        right: 0;
                        width: 25%;
                        height: 80%;
                    }

                    @keyframes flash {
                        0% { background-color: #ffff00; }
                        100% { background-color: #ff9900; }
                    }

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
                        width: 190%;
                    }

                    .shortcut-images {
                        min-height: 125px;
                        min-width: 125px;
                        overflow: hidden;
                    }

                    .shortcut-item {
                        // border-style: solid;
                        // border-color: red;
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
        </div>
    )
}