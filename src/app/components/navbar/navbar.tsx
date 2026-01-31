"use client";
import Link from "next/link";
import NavItem from "./nav-item/navItem";
import SocialLinks from "./social-links-icons/social-links";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const updateScrollStatus = () => {
      if (window.scrollY > 100) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", updateScrollStatus);

    return () => {
      window.removeEventListener("scroll", updateScrollStatus);
    };
  }, []);

  const background = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(0, 0, 0, 0.98)"],
  );

  return (
    <motion.header
      style={{ backgroundColor: background }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent ${hasScrolled ? "shadow-md border-gray" : "shadow-none"}`}
    >
      <div className="mx-auto py-4 w-full">
        <nav className="flex items-center justify-evenly">
          <motion.div
            className="text-white font-bold text-xl "
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="hover:scale-105 cursor-pointer transition-transform duration-200 text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Senthilnathan
            </div>
          </motion.div>
          <motion.div
            className="space-x-8 text-white font-medium hidden md:flex"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <NavItem>About</NavItem>
            <NavItem>Projects</NavItem>
            <NavItem>Experience</NavItem>
            <NavItem>Contact</NavItem>
          </motion.div>
          <div className="hidden md:flex">
            <SocialLinks></SocialLinks>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
