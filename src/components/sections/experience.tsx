"use client";

import { motion, Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioContent } from "@/data/content";

export default function Experience() {
  const { experience } = portfolioContent;

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="experience"
      className="relative py-24 bg-bg-secondary overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.03),transparent_50%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Cabecera de la Sección */}
        <div className="space-y-3 text-center mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            Trayectoria
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Experiencia <span className="gradient-text">Profesional</span>
          </h2>
          <div className="h-[2px] w-12 bg-primary mx-auto rounded-full" />
        </div>

        {/* Línea de Tiempo (Vertical Timeline) */}
        <div className="relative border-l border-border pl-6 sm:pl-10 space-y-12 ml-4 sm:ml-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              className="relative"
            >
              {/* Dot de la Línea de Tiempo */}
              <span className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex items-center justify-center">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/30 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-primary border-4 border-[#050C1A]"></span>
                </span>
              </span>

              {/* Tarjeta de Experiencia */}
              <Card className="bg-card border-border hover:border-accent/40 shadow-xl transition-all duration-300 relative group overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />

                <CardContent className="p-6 sm:p-8 space-y-6">
                  {/* Cabecera de la tarjeta */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/30 pb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white font-sans">
                        {exp.role}
                      </h3>
                      <p className="font-mono text-xs text-primary font-semibold mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <span className="font-mono text-xs px-3 py-1 rounded bg-[#101A30] border border-border text-[#B8C2D6]/85 w-fit">
                      {exp.period}
                    </span>
                  </div>

                  {/* Descripción de la empresa */}
                  <p className="text-sm sm:text-base text-[#B8C2D6] font-sans leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Lista de Responsabilidades */}
                  <div className="space-y-3">
                    <h4 className="font-mono text-[10px] uppercase tracking-widest text-[#B8C2D6]/50">
                      Responsabilidades y Logros
                    </h4>
                    <ul className="space-y-2.5">
                      {exp.responsibilities.map((resp, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-xs sm:text-sm text-[#B8C2D6]/80 font-sans leading-relaxed group/item hover:text-white transition-colors duration-150"
                        >
                          {/* Viñeta sutil en azul */}
                          <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2 group-hover/item:scale-125 transition-transform" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
