import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/section-heading';
import { Badge } from '@/components/ui/badge';
import { resumeData } from '@/data/resume';
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};
export function Skills() {
  const categories = [
    { name: "Frontend Development", items: resumeData.skills.frontend, color: "bg-blue-500" },
    { name: "Backend & Databases", items: resumeData.skills.backend, color: "bg-orange-500" },
    { name: "IT & Server Ops", items: resumeData.skills.it_ops, color: "bg-purple-500" },
  ];
  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SectionHeading 
        title="Technical Skills" 
        subtitle="The tools and technologies I use to bring ideas to life."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
        {categories.map((category) => (
          <motion.div
            key={category.name}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-1.5 h-8 ${category.color} rounded-full`} />
              <h3 className="text-xl font-bold">{category.name}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {category.items.map((skill) => (
                <motion.div key={skill} variants={itemVariants}>
                  <Badge 
                    variant="outline" 
                    className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all cursor-default"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}