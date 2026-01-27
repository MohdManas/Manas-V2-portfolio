import React from 'react';
import { motion } from 'framer-motion';
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}
export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          {title}
        </h2>
        <div className="h-1.5 w-20 bg-gradient-primary rounded-full mb-6" />
        {subtitle && (
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}