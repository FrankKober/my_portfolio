"use client";

import { motion } from "framer-motion";
import { FiCode, FiCpu, FiLayers, FiBarChart2, FiServer } from "react-icons/fi";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      icon: <FiCode className="text-blue-500" size={26} />,
      description: "Building production-ready applications using Next.js, React, and TypeScript. Focused on high-performance architecture, clean folder structures, and seamless styling with Tailwind CSS.",
    },
    {
      title: "AI Solutions",
      icon: <FiCpu className="text-purple-500" size={26} />,
      description: "Integrating smart elements, Python-based machine learning capabilities, and dynamic intelligence into workflows. Transforming data concepts into active automated solutions.",
    },
    {
      title: "UI/UX Design Implementation",
      icon: <FiLayers className="text-emerald-500" size={26} />,
      description: "Translating sleek design languages into functional code. Combining advanced Framer Motion transitions with glassmorphism styles to create micro-interactions that engage visitors.",
    },
    {
      title: "Data Analysis",
      icon: <FiBarChart2 className="text-orange-500" size={26} />,
      description: "Processing complex datasets using statistical frameworks like Python, SPSS, and STATA. Delivering understandable technical takeaways through informative data dashboards.",
    },
    {
      title: "API Development",
      icon: <FiServer className="text-pink-500" size={26} />,
      description: "Architecting backend frameworks with NestJS and Node.js. Structuring secure routes, handling relational tables with PostgreSQL or MySQL, and managing object schemas in MongoDB.",
    },
  ];

  return (
    <section id="services" className="relative py-24 z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
             <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500">Services I Offer</span>
          </h2>
          <div className="w-70 h-1 bg-linear-to-r from-emerald-600 to-teal-500 mx-auto rounded-full" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="p-8 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 flex flex-col"
            >
              <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl w-fit mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}