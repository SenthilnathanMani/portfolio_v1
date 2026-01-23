import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans flex-col">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <Navbar></Navbar>
        <Intro></Intro>
        <img src="/under_contruction.png" alt="Under Construction"></img>
      </main>
    </div>
  );
}
