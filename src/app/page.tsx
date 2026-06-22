import Navbar from "@/components/navbar";
import CursorGlow from "@/components/cursor-glow";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import Impact from "@/components/sections/impact";
import Projects from "@/components/sections/projects";
import Education from "@/components/sections/education";
import Contact from "@/components/sections/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      {/* Efecto interactivo de Brillo de Cursor (desktop) */}
      <CursorGlow />

      {/* Navegación Sticky responsiva */}
      <Navbar />

      {/* Contenedor Principal de la SPA */}
      <div className="flex flex-col min-h-screen">
        {/* 1. Hero Section */}
        <div id="hero">
          <Hero />
        </div>

        {/* 2. Sobre Mí */}
        <About />

        {/* 3. Tecnologías */}
        <Skills />

        {/* 4. Experiencia Profesional */}
        <Experience />

        {/* 5. Resultados e Impacto */}
        <Impact />

        {/* 6. Proyectos Destacados */}
        <Projects />

        {/* 7. Formación y Aprendizaje Continuo */}
        <Education />

        {/* 8. Contacto */}
        <Contact />
      </div>

      {/* Footer Oficial */}
      <Footer />
    </>
  );
}
