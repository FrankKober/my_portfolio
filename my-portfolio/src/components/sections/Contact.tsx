"use client";

import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiSend } from "react-icons/fi";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In the future, you can connect this to an API like Resend or EmailJS
    alert("Message feature coming soon! Please use the direct email link.");
  };

  return (
    <section id="contact" className="relative py-24 z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
             <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-600">Get In Touch</span>
          </h2>
          <div className="w-70 h-1 bg-linear-to-r from-emerald-600 to-teal-600 mx-auto rounded-full" />
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
            Have a project in mind, looking for a developer, or just want to connect? I'm currently open to new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="p-8 rounded-3xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Your Name</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-900 dark:text-white placeholder-slate-400" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Your Email</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-900 dark:text-white placeholder-slate-400" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
                <input type="text" required className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-900 dark:text-white placeholder-slate-400" placeholder="Project Inquiry" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                <textarea required rows={5} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-900 dark:text-white placeholder-slate-400 resize-none" placeholder="Hello Frankline, I'd like to discuss..." />
              </div>

              <button type="submit" className="w-full py-4 rounded-xl bg-linear-to-r from-emerald-600 to-teal-600 text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 hover:scale-[1.02] transition-all">
                Send Message <FiSend />
              </button>
            </form>
          </motion.div>

          {/* Right Column: Info, Socials & Map */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8 flex flex-col"
          >
            {/* Direct Contact Blocks */}
            <div className="grid sm:grid-cols-2 gap-6">
              <a href="mailto:your.email@example.com" className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-colors">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <FiMail size={24} />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Email Me</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">franklinekober@gmail.com</p>
              </a>

              <div className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 hover:border-purple-500 transition-colors">
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <FiMapPin size={24} />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Location</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Nairobi, Kenya</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              {[
                { icon: <FiGithub size={20} />, href: "https://github.com/FrankKober", color: "hover:bg-slate-800 hover:text-white" },
                { icon: <FiLinkedin size={20} />, href: "https://www.linkedin.com/in/frankline-kober-32a55230b/", color: "hover:bg-blue-700 hover:text-white" },
                { icon: <FiTwitter size={20} />, href: "https://twitter.com", color: "hover:bg-sky-500 hover:text-white" },
              ].map((social, idx) => (
                <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className={`p-4 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 shadow-sm transition-all duration-300 ${social.color}`}>
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Interactive Map (No API Key Required) */}
            <div className="w-full h-full min-h-62.5 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm">
              <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0} 
                src="https://www.openstreetmap.org/export/embed.html?bbox=36.75%2C-1.35%2C36.9%2C-1.2&layer=mapnik&marker=-1.286389%2C36.817223" 
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                style={{ filter: "invert(90%) hue-rotate(180deg)" }} // Subtle dark mode styling
              />
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}