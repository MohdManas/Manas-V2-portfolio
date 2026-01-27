import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/section-heading';
import { resumeData } from '@/data/resume';
import { 
  siReact, siJavascript, siTypescript, siNextdotjs, 
  siWordpress, siHtml5, siCss3, siTailwindcss, 
  siBootstrap, siNodedotjs, siPhp, siMysql, 
  siMongodb, siGithub, siPostman, siFigma 
} from 'simple-icons';
import { Code, Terminal, Settings } from 'lucide-react';
const iconMap: Record<string, any> = {
  "React.js": { icon: siReact, color: "#61DAFB" },
  "React Native": { icon: siReact, color: "#61DAFB" },
  "Next.js": { icon: siNextdotjs, color: "#000000" },
  "JavaScript": { icon: siJavascript, color: "#F7DF1E" },
  "TypeScript": { icon: siTypescript, color: "#3178C6" },
  "WordPress": { icon: siWordpress, color: "#21759B" },
  "HTML": { icon: siHtml5, color: "#E34F26" },
  "CSS": { icon: siCss3, color: "#1572B6" },
  "Tailwind CSS": { icon: siTailwindcss, color: "#06B6D4" },
  "Bootstrap": { icon: siBootstrap, color: "#7952B3" },
  "Node.js": { icon: siNodedotjs, color: "#339933" },
  "PHP": { icon: siPhp, color: "#777BB4" },
  "MySQL Server": { icon: siMysql, color: "#4479A1" },
  "MongoDB": { icon: siMongodb, color: "#47A248" },
  "cPanel": { icon: Settings, color: "#FF6C2C" },
  "Git": { icon: Code, color: "#F05032" },
  "GitHub": { icon: siGithub, color: "#181717" },
  "Postman": { icon: siPostman, color: "#FF6C37" },
  "Figma": { icon: siFigma, color: "#F24E1E" }
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};
const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 }
};
export function Skills() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeading
        title="Technical Toolkit"
        subtitle="A comprehensive grid of the technologies, frameworks, and tools I use to build robust digital solutions."
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-10"
      >
        {resumeData.skills.map((skill) => {
          const config = iconMap[skill] || { icon: Terminal, color: "currentColor" };
          const isSimpleIcon = !!config.icon.path;
          return (
            <motion.div 
              key={skill} 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative flex flex-col items-center justify-center p-8 rounded-3xl bg-card border border-border/50 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 group-hover:bg-gradient-to-br group-hover:from-background group-hover:to-secondary/20">
                <div 
                  className="w-12 h-12 mb-4 transition-all duration-300 group-hover:scale-110 flex items-center justify-center"
                  style={{ color: config.color }}
                >
                  {isSimpleIcon ? (
                    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <path d={config.icon.path} />
                    </svg>
                  ) : (
                    <config.icon className="w-full h-full" />
                  )}
                </div>
                <span className="text-xs font-bold text-muted-foreground group-hover:text-foreground transition-colors text-center tracking-wide">
                  {skill}
                </span>
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"
                  style={{ backgroundColor: config.color }}
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}