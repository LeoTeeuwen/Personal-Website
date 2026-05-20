export default function Resume() {
    return(
        <div style={{height: "100%", backgroundColor: "#282828"}}>
            <a href="/Leo_Teeuwen_Resume.pdf" download className="download-btn left-12/16"
                style={{ position: "absolute", top: 0, zIndex: 10 }}
            >
                <img src="/download.svg" style={{width: "50%"}}/>
            </a>
            <iframe
                src="/Leo_Teeuwen_Resume.pdf#toolbar=0"
                style={{ width: '100%', height: '100vh', border: 'none' }} 
                title="Resume PDF March 2026"
            />
        </div>
    )
}