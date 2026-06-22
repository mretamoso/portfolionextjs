"use client";

import { motion, Variants } from "framer-motion";
import { FolderDot, ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioContent } from "@/data/content";

export default function Projects() {
  const { projects } = portfolioContent;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completado":
        return (
          <Badge className="bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 font-mono text-[9px] uppercase tracking-wider py-0.5 px-2 hover:bg-[#10B981]/15">
            Completado
          </Badge>
        );
      case "En desarrollo":
        return (
          <Badge className="bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20 font-mono text-[9px] uppercase tracking-wider py-0.5 px-2 hover:bg-[#F59E0B]/15">
            En Desarrollo
          </Badge>
        );
      case "Próximamente":
        return (
          <Badge className="bg-[#1B2B4B]/60 text-[#B8C2D6]/80 border border-border/50 font-mono text-[9px] uppercase tracking-wider py-0.5 px-2 hover:bg-[#1B2B4B]/80">
            Próximamente
          </Badge>
        );
      case "Concepto":
        return (
          <Badge className="bg-[#1B2B4B]/40 text-[#B8C2D6]/60 border border-border/30 font-mono text-[9px] uppercase tracking-wider py-0.5 px-2 hover:bg-[#1B2B4B]/60">
            Concepto
          </Badge>
        );
      default:
        return (
          <Badge className="bg-secondary text-secondary-foreground font-mono text-[9px] uppercase tracking-wider py-0.5 px-2">
            {status}
          </Badge>
        );
    }
  };

  return (
    <section
      id="projects"
      className="relative py-24 bg-bg-secondary overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.02),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Cabecera de la Sección */}
        <div className="space-y-3 text-center lg:text-left mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            Mis Creaciones
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Proyectos <span className="gradient-text">Destacados</span>
          </h2>
          <div className="h-[2px] w-12 bg-primary mx-auto lg:mx-0 rounded-full" />
        </div>

        {/* Grid de Tarjetas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-card border border-border hover:border-accent/40 shadow-xl transition-all duration-300 h-full relative group overflow-hidden flex flex-col justify-between hover:scale-[1.005]">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-transparent opacity-30 group-hover:opacity-100 transition-opacity" />

                <CardContent className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Header: Icono + Estado + Título */}
                    <div className="flex items-center justify-between gap-4 pb-4 border-b border-border/30">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-[#101A30] border border-border group-hover:border-primary/30 transition-colors">
                          <FolderDot className="size-5 text-primary group-hover:text-blue-hover transition-colors" />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-white font-sans leading-tight">
                          {project.title}
                        </h3>
                      </div>
                      {getStatusBadge(project.status)}
                    </div>

                    {/* Descripción */}
                    <p className="text-xs sm:text-sm text-[#B8C2D6]/80 font-sans leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tecnologías utilizadas */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded bg-[#101A30]/60 border border-border/50 font-mono text-[10px] text-[#B8C2D6]/60 hover:text-white hover:border-primary/20 transition-all duration-150"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links / Métrica (Si hay alguno) */}
                  <div className="border-t border-border/20 pt-4 mt-6 flex items-center justify-between">
                    {project.metric ? (
                      <span className={`font-mono text-[10px] font-semibold ${project.metricColor || "text-muted-foreground"}`}>
                        {project.metric}
                      </span>
                    ) : (
                      <span className="font-mono text-[10px] text-[#B8C2D6]/30">
                        Proyecto Privado
                      </span>
                    )}

                    <div className="flex items-center gap-3">
                      {project.links?.code && (
                        <a
                          href={project.links.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded bg-[#101A30] border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-200"
                          aria-label="Ver Código Fuente"
                        >
                          <GitHubIcon className="size-4" />
                        </a>
                      )}
                      {project.links?.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded bg-[#101A30] border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-200"
                          aria-label="Ver Demo"
                        >
                          <ExternalLink className="size-4" />
                        </a>
                      )}
                    </div>
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
