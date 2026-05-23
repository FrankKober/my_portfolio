"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { FiCode, FiCpu, FiGithub, FiAward } from "react-icons/fi";

// Custom hook-based component for the counting animation
function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, { 
        duration: 2.5, 
        ease: "easeOut" 
      });
      return () => controls.stop();
    }
  }, [isInView, motionValue, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Statistics() {
  const stats = [
    {
      label: "Completed Projects",
      value: 12,
      suffix: "+",
      icon: <FiCode size={24} className="text-blue-500" />,
    },
    {
      label: "Technologies Mastered",
      value: 15,
      suffix: "+",
      icon: <FiCpu size={24} className="text-purple-500" />,
    },
    {
      label: "GitHub Commits",
      value: 850,
      suffix: "+",
      icon: <FiGithub size={24} className="text-emerald-500" />,
    },
    {
      label: "Certifications",
      value: 7,
      suffix: "",
      icon: <FiAward size={24} className="text-orange-500" />,
    },
  ];

  return (
    <section id="statistics" className="relative py-20 z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-6 text-center rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group"
            >
              <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              
              <div className="flex items-baseline justify-center text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 mb-2">
                <AnimatedNumber value={stat.value} />
                <span>{stat.suffix}</span>
              </div>
              
              <p className="text-sm md:text-base font-medium text-slate-600 dark:text-slate-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}