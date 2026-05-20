export default function Resume() {
    return(
        // TODO Put a custom download button here!
        <div style={{height: "100%", backgroundColor: "#282828"}}>
            <a href="/resumeMarch2026.pdf" download className="download-btn"
                style={{ position: "absolute", top: 0, zIndex: 10 }}
            >
                Download Now
            </a>
            <iframe
                src="/resumeMarch2026.pdf#toolbar=0"
                style={{ width: '100%', height: '100vh', border: 'none' }} 
                title="Resume PDF March 2026"
            />
        </div>
    )
}