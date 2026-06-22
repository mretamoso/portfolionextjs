"use client";

import { motion, Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioContent } from "@/data/content";

export default function About() {
  const { about } = portfolioContent;

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
      id="about"
      className="relative py-24 bg-bg-secondary overflow-hidden"
    >
      {/* Detalle visual sutil de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-hover/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
          className="space-y-12"
        >
          {/* Cabecera de la Sección */}
          <div className="space-y-3 text-center lg:text-left">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              Quién Soy
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Sobre <span className="gradient-text">Mí</span>
            </h2>
            <div className="h-[2px] w-12 bg-primary mx-auto lg:mx-0 rounded-full" />
          </div>

          {/* Grid de Contenido */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Columna Izquierda: Biografía */}
            <div className="lg:col-span-7 space-y-6 text-[#B8C2D6] text-sm sm:text-base leading-relaxed font-sans">
              {about.paragraphs.map((paragraph, index) => (
                <p key={index} className="transition-colors hover:text-white duration-200">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Columna Derecha: Tarjeta de Datos Rápidos */}
            <div className="lg:col-span-5">
              <Card className="bg-card border-border hover:border-accent transition-all duration-300 shadow-xl overflow-hidden relative group">
                {/* Indicador superior brillante sutil */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                
                <CardContent className="p-8 space-y-6">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-white border-b border-border/50 pb-4">
                    Datos Clave
                  </h3>
                  
                  <div className="space-y-5">
                    {about.quickFacts.map((fact, index) => (
                      <div
                        key={index}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-4 border-b border-border/20 last:border-b-0 last:pb-0"
                      >
                        <span className="font-sans text-xs sm:text-sm text-[#B8C2D6]/70">
                          {fact.label}
                        </span>
                        <span className="font-mono text-xs sm:text-sm text-primary font-semibold">
                          {fact.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
