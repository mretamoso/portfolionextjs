"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Mail, MapPin, Calendar, Send, CheckCircle2 } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/icons";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { portfolioContent } from "@/data/content";

export default function Contact() {
  const { personalInfo } = portfolioContent;

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "Contacto desde Portfolio",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    // Simulamos el envío y luego abrimos el mailto como fallback
    setTimeout(() => {
      setStatus("success");
      
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formState.subject
      )}&body=${encodeURIComponent(
        `Hola Miguel,\n\nMi nombre es ${formState.name} (${formState.email}).\n\n${formState.message}`
      )}`;
      
      window.location.href = mailtoUrl;

      // Limpiar formulario
      setFormState({
        name: "",
        email: "",
        subject: "Contacto desde Portfolio",
        message: "",
      });
    }, 1200);
  };

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Columna Izquierda: Información de Contacto */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="lg:col-span-5 space-y-6"
          >
            <p className="text-[#B8C2D6] text-sm sm:text-base leading-relaxed font-sans">
              Actualmente me encuentro abierto a nuevas oportunidades profesionales relacionadas con desarrollo de software, aplicaciones empresariales, APIs, bases de datos y tecnologías modernas.
            </p>

            <div className="space-y-4">
              {/* Tarjeta Email */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/80">
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

              {/* Tarjeta Ubicación */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/80">
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

              {/* Tarjeta Disponibilidad */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/80">
                <div className="p-2.5 rounded-lg bg-[#101A30] border border-border text-primary">
                  <Calendar className="size-5" />
                </div>
                <div>
                  <h4 className="font-mono text-[9px] uppercase tracking-widest text-[#B8C2D6]/40">
                    Disponibilidad
                  </h4>
                  <span className="text-xs sm:text-sm text-[#B8C2D6] font-sans">
                    Remoto, Híbrido, Tiempo Completo
                  </span>
                </div>
              </div>
            </div>

            {/* Enlaces de Redes */}
            <div className="flex gap-4 pt-4">
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
            </div>
          </motion.div>

          {/* Columna Derecha: Formulario de Contacto */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="lg:col-span-7"
          >
            <Card className="bg-card border border-border shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-transparent" />
              
              <CardContent className="p-6 sm:p-8">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="inline-flex p-3 rounded-full bg-[#10B981]/15 text-[#10B981] mb-2">
                      <CheckCircle2 className="size-10 animate-bounce" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-sans">
                      ¡Mensaje Procesado con Éxito!
                    </h3>
                    <p className="text-[#B8C2D6] text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                      Se ha configurado la plantilla y se abrirá tu gestor de correo predeterminado para finalizar el envío manual del correo a Miguel.
                    </p>
                    <Button
                      onClick={() => setStatus("idle")}
                      className="bg-primary hover:bg-blue-hover text-white text-xs font-mono mt-4"
                    >
                      Enviar otro mensaje
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Nombre */}
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="font-mono text-[10px] uppercase tracking-wider text-[#B8C2D6]/60"
                        >
                          Nombre Completo
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Tu nombre"
                          className="w-full bg-[#050C1A] border border-border/80 rounded-lg px-4 py-3 text-sm text-white placeholder-[#B8C2D6]/30 focus:outline-none focus:border-primary transition-colors"
                          required
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="font-mono text-[10px] uppercase tracking-wider text-[#B8C2D6]/60"
                        >
                          Correo Electrónico
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="tu@correo.com"
                          className="w-full bg-[#050C1A] border border-border/80 rounded-lg px-4 py-3 text-sm text-white placeholder-[#B8C2D6]/30 focus:outline-none focus:border-primary transition-colors"
                          required
                        />
                      </div>
                    </div>

                    {/* Asunto */}
                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="font-mono text-[10px] uppercase tracking-wider text-[#B8C2D6]/60"
                      >
                        Asunto
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        placeholder="Asunto del mensaje"
                        className="w-full bg-[#050C1A] border border-border/80 rounded-lg px-4 py-3 text-sm text-white placeholder-[#B8C2D6]/30 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>

                    {/* Mensaje */}
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="font-mono text-[10px] uppercase tracking-wider text-[#B8C2D6]/60"
                      >
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Escribe tu mensaje aquí..."
                        rows={5}
                        className="w-full bg-[#050C1A] border border-border/80 rounded-lg px-4 py-3 text-sm text-white placeholder-[#B8C2D6]/30 focus:outline-none focus:border-primary transition-colors resize-none"
                        required
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-destructive font-mono text-[10px] text-center">
                        Por favor, completa todos los campos requeridos.
                      </p>
                    )}

                    <Button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full bg-primary hover:bg-blue-hover text-white py-6 rounded-lg font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                    >
                      {status === "sending" ? "Enviando..." : "Enviar Mensaje"}
                      <Send size={14} />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
