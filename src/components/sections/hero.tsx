"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { portfolioContent } from "@/data/content";


export default function Hero() {
  const { personalInfo, hero } = portfolioContent;

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };


  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden dot-grid">
      {/* Glow radial detrás del contenido */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Lado Izquierdo: Textos */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge de Disponibilidad */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
            </span>
            <span className="font-mono text-[10px] font-medium tracking-wider text-[#10B981] uppercase">
              {personalInfo.availability}
            </span>
          </motion.div>

          {/* Nombre y Título */}
          <div className="space-y-2">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-sans leading-[1.08] pb-2"
            >
              Hola, soy{" "}
              <span className="gradient-text block mt-1 pb-1">{personalInfo.name}</span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl font-mono tracking-wide text-primary font-semibold"
            >
              {hero.headline}
            </motion.p>
          </div>

          {/* Descripción */}
          <motion.p
            variants={itemVariants}
            className="text-[#B8C2D6] text-sm sm:text-base max-w-2xl leading-relaxed font-sans"
          >
            {hero.description}
          </motion.p>

          {/* Botones de Acción */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
          >
            <Button
              onClick={() => handleScrollTo("projects")}
              className="bg-primary hover:bg-blue-hover text-white px-6 py-5 rounded-md font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-all duration-200"
            >
              Ver Proyectos <ArrowRight size={14} />
            </Button>
            
            <a
              href={personalInfo.cvPath}
              download
              className={buttonVariants({
                variant: "outline",
                className: "border-border text-foreground hover:bg-[#101A30]/50 hover:text-white px-6 py-5 rounded-md font-mono text-xs uppercase tracking-wider flex items-center gap-2"
              })}
            >
              <FileText size={14} /> Descargar CV
            </a>

            {/* Redes */}
            <div className="flex items-center gap-3 pl-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-md bg-[#101A30] border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-200"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-[18px] h-[18px]" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-md bg-[#101A30] border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-200"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-[18px] h-[18px]" />
              </a>
            </div>
          </motion.div>

          {/* Tira de Tecnologías (Core y Secundarias) */}
          <motion.div
            variants={itemVariants}
            className="w-full border-t border-border pt-6 mt-8 flex flex-col items-center lg:items-start gap-3"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#B8C2D6]/60">
              Tecnologías Destacadas
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
              {hero.highlights.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded bg-primary/10 border border-primary/20 font-mono text-xs text-[#60A5FA] font-medium"
                >
                  {tech}
                </span>
              ))}
              {hero.complementary.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded bg-[#101A30]/40 border border-border font-mono text-xs text-[#B8C2D6]/60 hover:border-border/80 hover:text-[#B8C2D6] transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Lado Derecho: Imagen de Perfil */}
        <motion.div
          className="lg:col-span-5 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 group">
            {/* Brillo de fondo */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary to-blue-hover opacity-20 blur-xl group-hover:opacity-35 transition-opacity duration-300" />
            
            {/* Marco de gradiente de la tarjeta */}
            <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-b from-primary/50 to-transparent">
              {/* Contenedor de la foto */}
              <div className="w-full h-full rounded-2xl bg-[#101A30] overflow-hidden border border-border flex items-center justify-center relative">
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  sizes="(max-width: 640px) 256px, 320px"
                  priority
                  className="object-cover scale-[1.02] group-hover:scale-[1.06] transition-transform duration-500 ease-out"
                />
                
                {/* Overlay sutil para oscurecer y azulear la imagen ligeramente */}
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050C1A] via-transparent to-transparent opacity-40 pointer-events-none" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
