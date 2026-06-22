"use client";

import { motion, Variants } from "framer-motion";
import { portfolioContent } from "@/data/content";

export default function Skills() {
  const { skills } = portfolioContent;

  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const tagContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const tagVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  return (
    <section
      id="skills"
      className="relative py-24 bg-background overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.03),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Cabecera de la Sección */}
        <div className="space-y-3 text-center lg:text-left mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            Stack Tecnológico
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Mis <span className="gradient-text">Habilidades</span>
          </h2>
          <div className="h-[2px] w-12 bg-primary mx-auto lg:mx-0 rounded-full" />
        </div>

        {/* Grid de Habilidades */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={cardVariants}
              className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header de la Categoría */}
                <div className="flex items-center gap-3 border-b border-border/30 pb-4 mb-4">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: group.dotColor }}
                  />
                  <h3 className="font-mono text-xs uppercase tracking-widest text-white font-semibold">
                    {group.category}
                  </h3>
                </div>

                {/* Cloud de Tags */}
                <motion.div
                  variants={tagContainerVariants}
                  className="flex flex-wrap gap-2"
                >
                  {group.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      variants={tagVariants}
                      className={`px-3 py-1.5 rounded-md border font-mono text-xs transition-all duration-200 cursor-default ${group.tagColor}`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              {/* Nota al pie opcional (para 'Estudiando Ahora') */}
              {group.footnote && (
                <div className="border-t border-border/20 pt-4 mt-6">
                  <p className="font-mono text-[10px] text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                    {group.footnote}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
