"use client";

import { motion } from "framer-motion";
import { 
  SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, 
  SiPrisma, SiMysql, SiMongodb, SiPython, SiPandas,
  SiHtml5, SiCss, SiNestjs, SiPostgresql
} from "react-icons/si";
import { FaReact, FaNodeJs, FaGitAlt, FaBrain, FaChartBar, FaChartLine } from "react-icons/fa";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: <FaReact className="text-[#61DAFB]" size={28} /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-slate-900 dark:text-white" size={28} /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" size={28} /> },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" size={28} /> },
        { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" size={28} /> },
        { name: "CSS", icon: <SiCss className="text-[#1572B6]" size={28} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" size={28} /> },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" size={28} /> },
        { name: "NestJS", icon: <SiNestjs className="text-[#E0234E]" size={28} /> },
        { name: "Prisma", icon: <SiPrisma className="text-[#2D3748] dark:text-white" size={28} /> },
        { name: "API Development", icon: <FaNodeJs className="text-slate-500" size={28} /> },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" size={28} /> },
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" size={28} /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" size={28} /> },
      ],
    },
    {
      title: "Mobile Development",
      skills: [
        { name: "React Native", icon: <FaReact className="text-[#61DAFB]" size={28} /> },
      ],
    },
    {
      title: "AI & Data Analysis",
      skills: [
        { name: "Python", icon: <SiPython className="text-[#3776AB]" size={28} /> },
        { name: "Machine Learning", icon: <FaBrain className="text-pink-500" size={28} /> },
        { name: "SPSS", icon: <FaChartBar className="text-blue-700" size={28} /> },
        { name: "STATA", icon: <FaChartLine className="text-indigo-600" size={28} /> },
        { name: "Data Dashboards", icon: <SiPandas className="text-[#150458] dark:text-blue-300" size={28} /> },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-[#F05032]" size={28} /> },
      ],
    },
  ];

  // Framer Motion configuration for staggered list animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="relative py-24 z-10 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
             <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500">Technical Skills</span>
          </h2>
           
          <div className="w-60 h-1 bg-linear-to-r from-emerald-600 to-teal-500 mx-auto rounded-full" />
        </motion.div>
        <p>
            Here are the technologies and tools I work with.
           </p>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">
                {category.title}
              </h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors group cursor-pointer"
                  >
                    <div className="mb-2 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400 text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}