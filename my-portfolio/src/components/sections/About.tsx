"use client";

import { motion } from "framer-motion";
import { FiBookOpen, FiTarget, FiCode } from "react-icons/fi";

export default function About() {
  const cards = [
    {
      title: "Education",
      icon: <FiBookOpen className="text-blue-500" size={24} />,
      description: "I studied Bachelor's of Science in Information Technology at Muranga University of Technology. Over my course work i learnt and  build a strong foundation software developmend were I learned algorithms, system design, and modern web architectures.",
    },
    {
      title: "Career Aspirations",
      icon: <FiTarget className="text-purple-500" size={24} />,
      description: "Aiming to become a Lead Full-Stack Engineer, architecting scalable applications and contributing to innovative AI-driven software solutions.",
    },
    {
      title: "Passion for Tech & AI",
      icon: <FiCode className="text-emerald-500" size={24} />,
      description: "Deeply interested in the intersection of traditional software development and Artificial Intelligence, specifically how machine learning can enhance user experiences.",
    },
  ];

  return (
    <section id="about" className="relative py-24 z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
             <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500">About Me</span>
          </h2>
          <div className="w-40 h-1 bg-linear-to-r from-emerald-600 to-teal-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Introduction */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed"
          >
            <p>
              Hello! I am <strong className="text-slate-900 dark:text-white font-semibold">Frankline Kober</strong>, an Information Technology graduate with a strong interest in software engineering, IT systems, data, and emerging technologies.
  I enjoy building practical technology solutions, understanding how systems work, identifying technical challenges, and finding efficient ways to solve them.     
            </p> 
            
           <p> I have developed hands-on experience working with modern web technologies, backend development, databases, APIs, and software development tools. I am equally interested in IT infrastructure, technical support, system administration, and the role technology plays in driving organisational efficiency.
I believe that technology is most valuable when it solves a problem, simplifies a process, or creates an opportunity for growth.
            </p>
            
             <p> I am passionate about using technology to solve real-world problems, improve business operations, and create meaningful digital experiences. My journey in Information Technology has allowed me to explore different areas of the technology landscape, from software development and database management to IT systems, data analysis, and digital transformation.
            </p>
            
          </motion.div>

          {/* Right Column: Highlight Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-6"
          >
            {cards.map((card, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {card.title}
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}