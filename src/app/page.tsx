import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import LetsConnect from "./components/letsConnect/letsConnect";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen overflow-hidden relative">
        <Navbar></Navbar>
        <Intro></Intro>
        <LetsConnect></LetsConnect>
         {/* TODO : Remove under construction image after site completion */}
        <img src="/under_contruction.png" alt="Under Construction" className="mx-auto"></img>
      </div>
    </main>
  );
}
