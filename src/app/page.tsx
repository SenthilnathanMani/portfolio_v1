import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import LetsConnect from "./components/lets-connect/lets-connect";
import Legend from "./components/legend/legend";
import AboutMe from "./components/about-me/about-me";
import { Footer } from "./components/footer/footer";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen overflow-hidden relative">
        <Navbar></Navbar>
        <Intro></Intro>
        <Legend></Legend>
        <AboutMe></AboutMe>
        <LetsConnect></LetsConnect>
        <Footer></Footer>

        {/* TODO : Remove under construction image after site completion */}
        <img
          src="/under_contruction.png"
          alt="Under Construction"
          className="mx-auto"
        ></img>
      </div>
    </main>
  );
}
