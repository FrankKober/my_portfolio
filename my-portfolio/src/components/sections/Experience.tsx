"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiAward, FiCalendar } from "react-icons/fi";

export default function Experience() {
  const experiences = [
    {
      title: "Software Developer Trainee",
      organization: "PLP Academy",
      duration: "July 2025 - Novermber 2025",
      type: "internship",
      description: "Successfully completed the Power Learn Project (PLP) software development program, where I gained hands-on experience in programming, web development, databases, and problem-solving. Worked on practical projects that strengthened my technical skills, teamwork, adaptability, and ability to build real-world digital solutions.",
      icon: <FiBriefcase size={20} className="text-blue-500" />
    },
    {
      title: "Full-Stack Developer Trainee",
      organization: "Teach2give/The Jitu",
      duration: "May 2025 - August 2025",
      type: "training",
      description: "Completed an intensive software engineering program. Built multiple full-stack applications using the MERN stack and learned modern deployment practices using Git and cloud platforms. Gained exposure to real-world development practices, collaboration, and continuous learning in the tech industry.",
      icon: <FiBriefcase size={20} className="text-purple-500" />
    },
    {
      title: "Open Source Contributor",
      organization: "Various Projects",
      duration: "2023 - present",
      type: "training",
      description: "Active Open Source Contributor with experience collaborating on projects, contributing code improvements, fixing bugs, and working with version control tools such as Git and GitHub. Passionate about continuous learning, teamwork, and building impactful software solutions for the developer community.",
      icon: <FiBriefcase size={20} className="text-purple-500" />
    },
    {
      title: "Freelance Web Developer",
      organization: "Self-employed",
      duration: "2023- Present",
      type: "certification",
      description: "Freelance Web Developer with experience designing and developing responsive, user-friendly websites tailored to client needs. Skilled in modern web technologies, problem-solving, and delivering functional and visually appealing digital solutions.",
      icon: <FiAward size={20} className="text-emerald-500" />
    }
  ];

  return (
    <section id="experience" className="relative py-24 z-10 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
             <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500">Experience & Certifications</span>
          </h2>
          <div className="w-80 h-1 bg-linear-to-r from-emerald-600 to-teal-500 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-0 md:mx-auto md:w-full max-w-3xl">
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0 mb-12 last:mb-0 w-full"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-2.25 md:left-1/2 md:-translate-x-1/2 md:top-6 top-1 w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-800 border-4 border-white dark:border-slate-950 z-10" />

              {/* Content Card container - Alternating layout for desktop */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'}`}>
                <div className="p-6 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow group">
                  
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-slate-100 dark:bg-slate-900/50 rounded-lg group-hover:scale-110 transition-transform">
                      {exp.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {exp.title}
                    </h3>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">
                    <span className="text-blue-600 dark:text-blue-400">{exp.organization}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="flex items-center gap-1">
                      <FiCalendar /> {exp.duration}
                    </span>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}