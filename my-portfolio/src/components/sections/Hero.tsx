"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiDownload, FiMail, FiArrowRight, FiArrowDown } from "react-icons/fi";
import Image from "next/image";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Full-Stack Developer";
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150g-blue-500/20 dark:bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Column: Text & CTAs */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-6 text-center lg:text-left"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-emerald-500 font-medium tracking-wide uppercase"
          >
            Welcome to my portfolio
          </motion.p>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
            Hi, I&apos;m <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600  to-teal-500">
              Frankline Kober
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300 h-10">
            {text}
            <motion.span 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-0.75 h-[1em] bg-purple-600 dark:bg-purple-500 ml-1 align-middle"
            />
          </h2>

          <p className="text-slate-600 dark:text-slate-400 max-w-lg mx-auto lg:mx-0 text-lg">
            I build exceptional and accessible digital experiences. Passionate about AI, modern web technologies, and crafting beautiful software.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <a href="#projects" className="group flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-medium hover:scale-105 transition-transform">
              View Projects 
              <FiArrowDown className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="/Resume.pdf" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-full font-medium hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-105 transition-all">
              <FiDownload /> Download Resume
            </a>

            <a href="#contact" className="flex items-center gap-2 px-6 py-3 bg-blue-50 dark:bg-blue-900/20 text-emerald-600 dark:text-emerald-400 rounded-full font-medium hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:scale-105 transition-all">
              <FiMail /> Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Avatar & Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Wrap both items in a flex column so they stack neatly */}
          <div className="flex flex-col items-center gap-10">
            
            {/* The Avatar */}
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500 to-purple-600 opacity-20 dark:opacity-40 blur-xl"
              />
              <div className="absolute inset-4 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden shadow-2xl border-2 border-white/40 dark:border-slate-700/50">
                <Image 
                  src="/avatar.png" 
                  alt="Frankline Kober" 
                  fill 
                  className="object-cover" 
                  priority
                />
              </div>
            </div>

            {/* Moved Scroll Down Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="flex flex-col items-center z-20"
            >
              <span className="text-xs text-slate-500 dark:text-slate-400 mb-2 font-medium tracking-widest uppercase">
                Scroll Down
              </span>
              <a
                href="#about"
                className="w-8 h-12 rounded-full border-2 border-slate-400 dark:border-slate-600 flex justify-center p-1 hover:border-emerald-500 transition-colors"
              >
                <motion.div
                  animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  className="w-1.5 h-3 bg-emerald-500 rounded-full"
                />
              </a>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}