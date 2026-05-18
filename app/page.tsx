import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div style={{display: "flex", flexDirection: "column"}}>
      <p>Yo Waddup Chain</p>
      <Link href="/resume">Resume</Link>
      <Link href="/hiddenTab">Link to what is going to be cool little side thing!</Link>
      <img src="/loadingScreen.png" style={{height: "15%", width: "15%"}}/>
   </div>
  );
}
