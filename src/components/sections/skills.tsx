import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/section-heading';
import { Badge } from '@/components/ui/badge';
import { resumeData } from '@/data/resume';
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};
export function Skills() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SectionHeading
        title="Technical Expertise"
        subtitle="A high-density overview of the technologies and tools I master daily."
      />
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3 mt-10 max-w-4xl mx-auto"
      >
        {resumeData.skills.map((skill) => (
          <motion.div key={skill} variants={itemVariants}>
            <Badge
              variant="outline"
              className="px-5 py-2.5 text-sm font-semibold bg-background border-border hover:border-primary hover:text-primary hover:shadow-primary/20 transition-all duration-300 cursor-default select-none rounded-xl"
            >
              {skill}
            </Badge>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}