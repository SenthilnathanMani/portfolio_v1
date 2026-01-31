"use client";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function Intro() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
    const el = sectionRef.current;
    if (!el) return;

    const anim = gsap.to(el, {
      height: "400px",
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top top",
        scrub: true,
      },
    });

    return () => {
      if (anim.scrollTrigger) anim.scrollTrigger.kill();
      anim.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const onConnect = () => {
    gsap.to(window, { duration: 0.1, scrollTo: { y: "#contact-section" } });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden space-y-6 text-center px-6"
    >
      <div className="md:max-w-[70%] mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-8xl lg:text-8xl font-black leading-none">
          Hello there, I'm{" "}
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent flex space-x-4 flex-wrap justify-center">
            <span className="break-all">Senthilnathan</span>
          </div>
        </h1>
        <div className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto">
          <span className="text-blue-400">Software Engineer</span>{" "}
          <span> crafting digital experiences from </span>{" "}
          <span className="text-green-400 font-semibold">India</span>
        </div>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          I design and build exceptional digital experiences with a focus on
          performance, accessibility, and user delight. Currently building at{" "}
          <span className="text-purple-400">DHL</span>
        </p>
        <button
          onClick={onConnect}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-primary/90 h-11 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group cursor-pointer"
          aria-label="Navigate to contact section"
        >
          <span>Let's Connect</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
            aria-hidden="true"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </section>
  );
}
