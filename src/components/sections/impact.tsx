"use client";

import { motion, Variants } from "framer-motion";
import { Database, AlertTriangle, Settings, RefreshCw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioContent } from "@/data/content";

export default function Impact() {
  const { impact } = portfolioContent;

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

  const getIcon = (iconName: string, color: string) => {
    const props = { className: "size-6 shrink-0", style: { color } };
    switch (iconName) {
      case "database":
        return <Database {...props} />;
      case "alert-triangle":
        return <AlertTriangle {...props} />;
      case "settings":
        return <Settings {...props} />;
      case "refresh":
        return <RefreshCw {...props} />;
      default:
        return <Settings {...props} />;
    }
  };

  return (
    <section
      id="impact"
      className="relative py-24 bg-background overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.03),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Cabecera de la Sección */}
        <div className="space-y-3 text-center lg:text-left mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            Resultados
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Resultados e <span className="gradient-text">Impacto</span>
          </h2>
          <div className="h-[2px] w-12 bg-primary mx-auto lg:mx-0 rounded-full" />
          <p className="text-[#B8C2D6] text-sm sm:text-base max-w-3xl leading-relaxed mt-4">
            {impact.summary}
          </p>
        </div>

        {/* Tarjetas de Métricas (KPIs Reales y Cualitativos) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16"
        >
          {impact.stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariants}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="font-mono text-3xl sm:text-4xl font-bold text-primary group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#B8C2D6]/50 mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Casos de Estudio (Cards Grid) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {impact.caseStudies.map((cs) => (
            <motion.div key={cs.id} variants={fadeUpVariants}>
              <Card className="bg-card border border-border hover:border-accent/40 shadow-xl transition-all duration-300 h-full relative group overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-transparent opacity-30 group-hover:opacity-100 transition-opacity" />
                
                <CardContent className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Header: Icono + Título */}
                    <div className="flex items-center gap-4 pb-4 border-b border-border/30">
                      <div className="p-2.5 rounded-lg bg-[#101A30] border border-border group-hover:border-primary/30 transition-colors">
                        {getIcon(cs.iconName, cs.iconColor)}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white font-sans leading-tight">
                        {cs.title}
                      </h3>
                    </div>

                    {/* Descripción */}
                    <p className="text-xs sm:text-sm text-[#B8C2D6]/80 font-sans leading-relaxed">
                      {cs.description}
                    </p>

                    {/* Actividades o Tecnologías */}
                    {cs.technologies && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {cs.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-1 rounded bg-[#101A30]/50 border border-border font-mono text-[10px] text-[#B8C2D6]/60"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                    {cs.activities && (
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {cs.activities.map((a) => (
                          <span
                            key={a}
                            className="px-2.5 py-1 rounded-full bg-[#101A30] border border-border/30 font-mono text-[9px] text-[#60A5FA]"
                          >
                            {a}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Resultado (Outcome) */}
                  <div className="border-t border-border/20 pt-4 mt-6">
                    <h4 className="font-mono text-[9px] uppercase tracking-widest text-[#B8C2D6]/40 mb-1">
                      Resultado alcanzado
                    </h4>
                    <p className={`font-mono text-[11px] font-semibold leading-relaxed ${cs.outcomeColor}`}>
                      {cs.outcome}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
