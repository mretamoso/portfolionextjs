"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { LinkedInIcon, GitHubIcon, WhatsAppIcon } from "@/components/icons";
import { Card, CardContent } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { portfolioContent } from "@/data/content";

export default function Contact() {
  const { personalInfo } = portfolioContent;

  const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    "Contacto desde portfolio - Miguel Retamoso"
  )}&body=${encodeURIComponent(
    "Hola Miguel, vi tu portfolio y me gustaría conversar contigo."
  )}`;

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
      id="contact"
      className="relative py-24 bg-background overflow-hidden dot-grid"
    >
      {/* Brillo radial azul en la parte inferior */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Cabecera de la Sección */}
        <div className="space-y-3 text-center mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            Hablemos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            ¿Trabajamos <span className="gradient-text">Juntos?</span>
          </h2>
          <div className="h-[2px] w-12 bg-primary mx-auto rounded-full" />
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 mt-4">
            <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-wider text-[#10B981]">
              {personalInfo.availability}
            </span>
          </div>
        </div>

        {/* Grid de Contenido */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Columna Izquierda: Información de Contacto */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              <p className="text-[#B8C2D6] text-sm sm:text-base leading-relaxed font-sans">
                Actualmente me encuentro abierto a nuevas oportunidades profesionales relacionadas con desarrollo de software, aplicaciones empresariales, APIs, bases de datos y tecnologías modernas.
              </p>

              <div className="space-y-4">
                {/* Tarjeta Email */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/85">
                  <div className="p-2.5 rounded-lg bg-[#101A30] border border-border text-primary">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-mono text-[9px] uppercase tracking-widest text-[#B8C2D6]/40">
                      Correo Electrónico
                    </h4>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm text-[#B8C2D6] hover:text-primary transition-colors font-sans"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Tarjeta WhatsApp */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/85">
                  <div className="p-2.5 rounded-lg bg-[#101A30] border border-border text-[#10B981]">
                    <WhatsAppIcon className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-mono text-[9px] uppercase tracking-widest text-[#B8C2D6]/40">
                      WhatsApp
                    </h4>
                    <a
                      href={personalInfo.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-[#B8C2D6] hover:text-[#10B981] transition-colors font-sans"
                    >
                      {personalInfo.whatsappNumber}
                    </a>
                  </div>
                </div>

                {/* Tarjeta Ubicación */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/85">
                  <div className="p-2.5 rounded-lg bg-[#101A30] border border-border text-primary">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-mono text-[9px] uppercase tracking-widest text-[#B8C2D6]/40">
                      Ubicación
                    </h4>
                    <span className="text-xs sm:text-sm text-[#B8C2D6] font-sans">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enlaces de Redes (Botones rápidos) */}
            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-card border border-border hover:border-primary/50 text-[#B8C2D6] hover:text-white transition-all text-xs font-mono"
              >
                <LinkedInIcon className="size-4 text-primary" /> LinkedIn
              </a>
              
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-card border border-border hover:border-primary/50 text-[#B8C2D6] hover:text-white transition-all text-xs font-mono"
              >
                <GitHubIcon className="size-4 text-primary" /> GitHub
              </a>

              <a
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-card border border-border hover:border-[#10B981]/50 text-[#B8C2D6] hover:text-white transition-all text-xs font-mono"
              >
                <WhatsAppIcon className="size-4 text-[#10B981]" /> WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Columna Derecha: Vista Previa del Correo Estructurado */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="lg:col-span-7 flex"
          >
            <Card className="bg-card border border-border shadow-2xl relative overflow-hidden flex flex-col justify-between w-full">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-transparent" />
              
              <CardContent className="p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
                {/* Cabecera Tipo Cliente de Correo */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-border/30 pb-4">
                    <span className="h-3 w-3 rounded-full bg-red-500/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <span className="h-3 w-3 rounded-full bg-green-500/80" />
                    <span className="font-mono text-[9px] text-[#B8C2D6]/40 ml-2 uppercase tracking-wider">
                      Nuevo Correo Electrónico
                    </span>
                  </div>

                  {/* Campos de Correo */}
                  <div className="space-y-3 font-sans text-xs sm:text-sm">
                    <div className="flex border-b border-border/20 py-1">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#B8C2D6]/40 w-16">
                        Para:
                      </span>
                      <span className="text-[#60A5FA] font-medium">
                        {personalInfo.email}
                      </span>
                    </div>

                    <div className="flex border-b border-border/20 py-1">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#B8C2D6]/40 w-16">
                        Asunto:
                      </span>
                      <span className="text-white font-medium">
                        Contacto desde portfolio - Miguel Retamoso
                      </span>
                    </div>

                    <div className="flex flex-col pt-2 space-y-1.5">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#B8C2D6]/40">
                        Mensaje Pre-llenado:
                      </span>
                      <div className="bg-[#050C1A] border border-border/60 rounded-lg p-4 font-sans text-xs text-[#B8C2D6] leading-relaxed italic">
                        "Hola Miguel, vi tu portfolio y me gustaría conversar contigo."
                      </div>
                    </div>
                  </div>
                </div>

                {/* Botón de Enviar (Mailto directo) */}
                <div className="pt-2">
                  <a
                    href={mailtoUrl}
                    className={buttonVariants({
                      variant: "default",
                      className: "w-full bg-primary hover:bg-blue-hover text-white py-6 rounded-lg font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200"
                    })}
                  >
                    Enviar Mensaje <Send size={14} />
                  </a>
                  <p className="font-mono text-[9px] text-center text-[#B8C2D6]/30 mt-3">
                    Abre el cliente de correo predeterminado de tu dispositivo.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
