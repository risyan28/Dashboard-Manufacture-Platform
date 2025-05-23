"use client";

<<<<<<< HEAD
import { useState, useEffect } from "react";
=======
>>>>>>> 16dd84d0543aa67d56cabe2c1b32718a729a2776
import { Menu } from "lucide-react";
import { Button } from "~/components/ui/button";
import type { HeaderProps } from "./types";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import Image from "next/image";
<<<<<<< HEAD
import { motion } from "framer-motion";

export function Header({ onMenuClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      setScrolled(position > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate dynamic gradient based on scroll position
  const getGradient = () => {
    if (!scrolled) return "from-blue-600 via-blue-500 to-teal-400";

    // Cycle through different gradients based on scroll position
    const gradients = [
      "from-blue-600 via-blue-500 to-teal-400",
      "from-purple-600 via-pink-500 to-orange-500",
      "from-indigo-600 via-blue-500 to-emerald-400",
      "from-rose-600 via-pink-500 to-yellow-400",
    ];

    const index = Math.floor((scrollPosition / 200) % gradients.length);
    return gradients[index];
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 w-full py-3 text-white transition-all duration-700 ${
        scrolled ? "shadow-lg" : ""
      } bg-gradient-to-r ${getGradient()}`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Left section: Menu + Logo */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="flex items-center"
          >
            <Image
              src="/images/tmmin.png"
              alt="Toyota Logo"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </motion.div>
        </div>

        {/* Center section: e-WOS */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="relative"
        >
          <h1 className="text-xl font-bold tracking-wider">e-WOS</h1>
          <motion.span
            className="absolute -bottom-1 left-0 h-[2px] w-0 bg-white"
            animate={{ width: "100%" }}
            transition={{ delay: 0.8, duration: 0.6 }}
          />
        </motion.div>

        {/* Right section: Avatar + User Info */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="flex items-center gap-3"
        >
          <div className="hidden flex-col items-end md:flex">
            <h1 className="text-sm font-bold">A. RISYAN</h1>
            <p className="text-xs opacity-80">Dept. Engineering</p>
          </div>
          <Avatar className="h-10 w-10 border-2 border-white shadow-sm transition-all duration-300 hover:scale-105">
            <AvatarImage
              src={`https://ui-avatars.com/api/?name=AR&background=random`}
              alt="User"
            />
            <AvatarFallback>AR</AvatarFallback>
          </Avatar>
        </motion.div>
      </div>
    </motion.header>
=======

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 py-2 text-white">
      <div className="relative flex items-center justify-between">
        {/* Logo di pojok kiri, absolute */}
        <div className="absolute left-32 top-1/2 hidden -translate-y-1/2 sm:block">
          <Image
            src="/icons/icon-512x512.png"
            alt="JS Logo"
            width={512}
            height={512}
            className="h-12 w-auto object-contain"
            priority
          />
        </div>
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Mobile Content - Only shows user info and app name */}
          <div className="flex flex-1 items-center justify-between md:hidden">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 border-2 border-white">
                <AvatarImage
                  src={`https://ui-avatars.com/api/?name=AR&background=random`}
                  alt="User"
                />
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <h1 className="font-bold">A. RISYAN</h1>
                <p className="text-xs opacity-80">Dept. Engineering</p>
              </div>
            </div>
          </div>

          {/* Desktop Content - Shows everything */}
          <div className="hidden flex-1 items-center justify-between md:flex">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-white"
                onClick={onMenuClick}
              >
                <Menu className="h-5 w-5" />
              </Button>

              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 border-2 border-white">
                  <AvatarImage
                    src={`https://ui-avatars.com/api/?name=AR&background=random`}
                    alt="User"
                  />
                  <AvatarFallback>AR</AvatarFallback>
                </Avatar>
              </div>
            </div>

            <h1 className="text-lg font-bold">Name Of Application</h1>
          </div>
        </div>
      </div>
    </header>
>>>>>>> 16dd84d0543aa67d56cabe2c1b32718a729a2776
  );
}
