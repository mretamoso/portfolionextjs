"use client";

import { motion, Variants } from "framer-motion";
import { GraduationCap, Award, Compass } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { portfolioContent } from "@/data/content";

export default function Education() {
  const { education } = portfolioContent;

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <section
      id="education"
      className="relative py-24 bg-background overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.02),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Cabecera de la Sección */}
        <div className="space-y-3 text-center lg:text-left mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            Crecimiento
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Formación y <span className="gradient-text">Aprendizaje</span>
          </h2>
          <div className="h-[2px] w-12 bg-primary mx-auto lg:mx-0 rounded-full" />
          <p className="text-[#B8C2D6] text-sm sm:text-base max-w-3xl leading-relaxed mt-4">
            {education.summary}
          </p>
        </div>

        {/* Grid de Dos Columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Columna Izquierda: Formación y Objetivos */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="lg:col-span-6 space-y-8"
          >
            {/* Formación Complementaria */}
            <motion.div variants={fadeUpVariants}>
              <Card className="bg-card border border-border shadow-xl hover:border-accent/30 transition-all duration-300 relative group overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-transparent opacity-30 group-hover:opacity-100 transition-opacity" />
                
                <CardContent className="p-6 sm:p-8 space-y-6">
                  <div className="flex items-center gap-3 pb-4 border-b border-border/30">
                    <div className="p-2.5 rounded-lg bg-[#101A30] border border-border">
                      <Award className="size-5 text-primary" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white font-sans">
                      Formación Complementaria
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {education.courses.map((course, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-xs sm:text-sm text-[#B8C2D6]/80 font-sans group hover:text-white transition-colors duration-150"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 group-hover:scale-125 transition-transform" />
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Objetivo Profesional */}
            <motion.div variants={fadeUpVariants}>
              <Card className="bg-card border border-border shadow-xl hover:border-accent/30 transition-all duration-300 relative group overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-transparent opacity-30 group-hover:opacity-100 transition-opacity" />
                
                <CardContent className="p-6 sm:p-8 space-y-6">
                  <div className="flex items-center gap-3 pb-4 border-b border-border/30">
                    <div className="p-2.5 rounded-lg bg-[#101A30] border border-border">
                      <Compass className="size-5 text-primary" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white font-sans">
                      {education.objective.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#B8C2D6]/90 font-sans leading-relaxed">
                    {education.objective.text}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Columna Derecha: Actualmente Estudiando (Progress Bars) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="lg:col-span-6"
          >
            <Card className="bg-card border border-border shadow-xl hover:border-accent/30 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-transparent opacity-30 group-hover:opacity-100 transition-opacity" />
              
              <CardContent className="p-6 sm:p-8 space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-border/30">
                  <div className="p-2.5 rounded-lg bg-[#101A30] border border-border">
                    <GraduationCap className="size-5 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-sans">
                    Actualmente Estudiando
                  </h3>
                </div>

                <div className="space-y-6">
                  {education.learningTopics.map((topic, index) => (
                    <motion.div
                      key={index}
                      variants={fadeUpVariants}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center font-mono text-xs">
                        <span className="text-[#B8C2D6]/90 hover:text-white transition-colors">
                          {topic.name}
                        </span>
                        <span className="text-primary font-semibold">
                          {topic.progress}%
                        </span>
                      </div>
                      
                      {/* Animación de la barra de progreso al cargar */}
                      <div className="relative w-full h-1.5 bg-[#101A30] border border-border/40 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${topic.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
