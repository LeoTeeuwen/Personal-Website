import GameInstance from "../components/gameInstance";


export default function Home() {
    return (
        <>
            <title>Home | Leo Teeuwen</title>
            <link rel="icon" type="image/png" href="/icon.png"/>
            <div className="max-w-full max-h-full">
                <div className="game-canvas-div">
                    <GameInstance />
                </div>
            </div>
        </>
    )
}