"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";

// Define the shape of our project objects for TypeScript
type Project = {
  title: string;
  description: string;
  techStack: string[];
  gradient: string;  // Required fallback gradient
  image?: string;    // Optional image path
  githubUrl: string;
  liveUrl: string;
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Task Management System",
      description: "A comprehensive university-level collaboration platform. Features include real-time task assignments, progress tracking, role-based access control, and team workspaces.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
      gradient: "from-blue-500 to-cyan-400", // Fallback gradient
      image: "/Tasky.png", 
      githubUrl: "https://github.com/FrankKober/Tasky-V2",
      liveUrl: "https://tasky-v2-three.vercel.app/",
    },
    {
      title: "Barbershop Booking App",
      description: "A seamless scheduling solution for barbershops. Customers can view availability, book specific barbers, and manage appointments, while shop owners get a full management dashboard.",
      techStack: ["React", "Node.js", "Tailwind CSS", "MongoDB", "Express"],
      gradient: "from-purple-500 to-indigo-500", // Fallback gradient
      image: "/barbershop.png", 
      githubUrl: "https://github.com/FrankKober/barbershop-booking",
      liveUrl: "https://barbershop-booking-plum.vercel.app/",
    },
    {
      title: "Zaph Travels",
      description: "A dynamic travel and tour agency platform. Users can browse curated destinations, book tour packages, and read travel guides with an optimized, image-rich user interface.",
      techStack: ["Next.js", "React", "MySQL", "Tailwind CSS"],
      gradient: "from-emerald-400 to-teal-500", // Fallback gradient
      image: "/Zaph.png", 
      githubUrl: "https://github.com/FrankKober/zaph-safaris",
      liveUrl: "https://zaph-safaris.vercel.app/",
    },
    {
      title: "Blogit",
      description: "A modern, high-performance blogging platform. Includes rich-text editing, categorized feeds, user authentication, and an SEO-optimized architecture for content creators.",
      techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      gradient: "from-orange-400 to-pink-500",
      image: "/Blogit.png", 
      githubUrl: "https://github.com/FrankKober/blogitapp",
      liveUrl: "https://blogitapp.vercel.app/blogs",
    },
  ];

  return (
    <section id="projects" className="relative py-24 z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
             <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500"> Featured Projects</span>
          </h2>
          <div className="w-70 h-1 bg-linear-to-r from-emerald-600 to-teal-500 mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              
              {/* Project Image Area */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                
                {/* Image or Gradient Logic */}
                {project.image ? (
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-linear-to-br ${project.gradient}`} />
                )}
                
                {/* Mobile-Friendly Floating Action Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 z-10 transition-all duration-300 opacity-100 md:opacity-0 group-hover:opacity-100 bg-black/40 md:bg-transparent group-hover:bg-black/40 backdrop-blur-sm md:backdrop-blur-none group-hover:backdrop-blur-sm">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform shadow-lg">
                    <FiGithub size={20} />
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-emerald-600 text-white rounded-full hover:scale-110 transition-transform shadow-lg">
                    <FiExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col grow">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 grow">
                  {project.description}
                </p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}