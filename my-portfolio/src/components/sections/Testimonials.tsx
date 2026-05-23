"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Shadrack Yegon",
      role: "Project Manager",
      company: "IPP",
      text: "Frankline is an exceptional developer. His ability to take complex requirements and turn them into intuitive, fast web applications is unmatched. He was instrumental in upgrading our legacy systems.",
      gradient: "from-blue-400 to-cyan-400",
    },
    {
      name: "Dennis Otwoma",
      role: "Software Engineer",
      company: "Griffin Technology",
      text: "During his time at the bootcamp, Frankline consistently produced top-tier work. His understanding of full-stack architecture, particularly Node.js and React, places him in the top percentile of his cohort.",
      gradient: "from-purple-400 to-pink-400",
    },
    {
      name: "Collins Cheruiyot",
      role: "Senior Software Engineer",
      company: "Safaricom PLC",
      text: "Kober is an exceptional developer. His ability to take complex requirements and turn them into intuitive, fast web applications is unmatched. He was instrumental in upgrading our legacy systems.",
      gradient: "from-emerald-400 to-teal-400",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // State to handle hover pausing

  // Autoplay functionality
  useEffect(() => {
    if (isPaused) return; // Don't switch if the user is hovering

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 3000); // Switches every 5 seconds

    // Cleanup timer on unmount or when dependencies change
    return () => clearInterval(timer);
  }, [isPaused, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="relative py-24 z-10 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-600">Testimonials</span>
          </h2>
          <div className="w-70 h-1 bg-linear-to-r from-emerald-600 to-teal-600 mx-auto rounded-full" />
        </motion.div>

        {/* Interactive Slider - Added onMouseEnter and onMouseLeave */}
        <div 
          className="relative bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200 dark:border-slate-700 rounded-3xl p-8 md:p-12 shadow-sm min-h-87.5 flex items-center justify-center overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          <FaQuoteLeft className="absolute top-8 left-8 text-slate-200 dark:text-slate-700/50" size={60} />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative z-10 w-full"
            >
              <p className="text-lg md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].text}"
              </p>
              
              <div className="flex flex-col items-center justify-center gap-4 mt-6">
                <div className={`w-16 h-16 rounded-full bg-linear-to-br ${testimonials[currentIndex].gradient} shadow-md border-2 border-white dark:border-slate-800`} />
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 md:px-6 pointer-events-none">
            <button 
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white dark:bg-slate-900 shadow-md border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:scale-110 pointer-events-auto transition-all"
            >
              <FiChevronLeft size={24} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white dark:bg-slate-900 shadow-md border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:scale-110 pointer-events-auto transition-all"
            >
              <FiChevronRight size={24} />
            </button>
          </div>

        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === idx ? "bg-emerald-600 w-8" : "bg-slate-300 dark:bg-slate-700"}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}