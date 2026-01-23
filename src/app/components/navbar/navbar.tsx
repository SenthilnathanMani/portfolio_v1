"use client";
import Link from "next/link";
import NavItem from "./nav-item/navItem";
import SocialLinks from "./social-links-icons/social-links";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
      <div className="mx-auto py-8  w-full">
        <nav className="flex items-center justify-evenly">
          <div className="text-white font-bold text-xl ">
            <div className="hover:scale-105 cursor-pointer transition-transform duration-200 text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Senthilnathan Mani
            </div>
          </div>

          <div className="space-x-8 text-white font-medium hidden md:flex">
            <NavItem>About</NavItem>
            <NavItem>Projects</NavItem>
            <NavItem>Experience</NavItem>
            <NavItem>Contact</NavItem>
          </div>
          <div className="hidden md:flex">
            <SocialLinks></SocialLinks>
          </div>
        </nav>
      </div>
    </header>
  );
}
