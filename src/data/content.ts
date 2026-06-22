export interface TechnologyGroup {
  category: string;
  dotColor: string;
  tagColor: string;
  technologies: string[];
  footnote?: string;
}

export interface ExperienceEntry {
  company: string;
  description?: string;
  role: string;
  period: string;
  responsibilities: string[];
  client?: string;
  modality?: string;
  technologies?: string[];
}

export interface ImpactCaseStudy {
  id: string;
  title: string;
  iconName: "database" | "alert-triangle" | "settings" | "refresh";
  iconColor: string;
  description: string;
  technologies?: string[];
  activities?: string[];
  outcome: string;
  outcomeColor: string;
}

export interface ProjectEntry {
  title: string;
  status: "Completado" | "En desarrollo" | "Próximamente" | "Concepto";
  description: string;
  stack: string[];
  metric?: string;
  metricColor?: string;
  links?: {
    demo?: string;
    code?: string;
    details?: string;
  };
}

export interface LearningTopic {
  name: string;
  progress: number; // Porcentaje de progreso
}

export const portfolioContent = {
  personalInfo: {
    name: "Miguel Retamoso",
    title: "Desarrollador Full Stack Semi Senior",
    tagline: "Construyendo sistemas que escalan. Resolviendo problemas que importan.",
    location: "Lima, Perú",
    availability: "Disponible para oportunidades remotas / híbridas",
    email: "miguelretamosoin@gmail.com",
    linkedin: "https://www.linkedin.com/in/miguel-alonso-retamoso-infante-585ba1132",
    github: "https://github.com/mretamoso",
    whatsapp: "https://wa.me/51971869708?text=Hola%20Miguel%2C%20vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20conversar%20contigo.",
    whatsappNumber: "+51 971869708",
    cvPath: "/documents/cv-miguel-retamoso.pdf",
    profileImage: "/images/foto-miguel.png",
  },
  hero: {
    headline: "Desarrollador Full Stack Semi Senior",
    description: "Más de 3 años desarrollando y manteniendo aplicaciones empresariales utilizando .NET, SQL Server y Angular. Especializado en el desarrollo de APIs REST, optimización de procedimientos almacenados, automatización de procesos y resolución de incidencias en entornos productivos.",
    highlights: ["ASP.NET Core", "SQL Server", "Angular", ".NET 9"],
    complementary: ["PostgreSQL", "TypeScript", "React", "Next.js", "Azure DevOps", "Entity Framework Core"],
  },
  about: {
    paragraphs: [
      "Soy Desarrollador Full Stack con experiencia en el desarrollo, mantenimiento y optimización de aplicaciones empresariales.",
      "Durante los últimos años he participado en proyectos relacionados con sistemas de gestión, integración de servicios, automatización de procesos y soporte de aplicaciones críticas para el negocio.",
      "Mi experiencia se encuentra principalmente en tecnologías Microsoft, trabajando con .NET, ASP.NET Core, SQL Server y Angular para construir soluciones escalables y mantener sistemas en producción.",
      "Además de mi experiencia técnica, disfruto analizar problemas complejos, optimizar procesos existentes y proponer mejoras que generen valor para los usuarios y las organizaciones."
    ],
    quickFacts: [
      { label: "Experiencia Profesional", value: "3+ Años" },
      { label: "Enfoque de Desarrollo", value: "Sistemas Empresariales" },
      { label: "Especialidad Técnica", value: "Backend + Frontend" },
      { label: "Esquema de Trabajo", value: "Remoto / Híbrido" }
    ]
  },
  skills: [
    {
      category: "Backend",
      dotColor: "#2272F5",
      tagColor: "text-[#3B82F6] border-[#3B82F6]/30 hover:bg-[#3B82F6]/10",
      technologies: [".NET 9", "ASP.NET Core", "Entity Framework Core", "REST APIs"]
    },
    {
      category: "Bases de Datos",
      dotColor: "#0EA5D9",
      tagColor: "text-[#0EA5D9] border-[#0EA5D9]/30 hover:bg-[#0EA5D9]/10",
      technologies: ["SQL Server", "PostgreSQL", "T-SQL", "Stored Procedures", "Optimización de Consultas", "Diseño de Bases de Datos"]
    },
    {
      category: "Frontend",
      dotColor: "#60A5FA",
      tagColor: "text-[#60A5FA] border-[#60A5FA]/30 hover:bg-[#60A5FA]/10",
      technologies: ["Angular", "TypeScript", "React", "Next.js", "Tailwind CSS", "HTML", "CSS"]
    },
    {
      category: "Dev Tools",
      dotColor: "#38C4F0",
      tagColor: "text-[#38C4F0] border-[#38C4F0]/30 hover:bg-[#38C4F0]/10",
      technologies: ["Git", "Azure DevOps", "Visual Studio", "Visual Studio Code"]
    },
    {
      category: "Desarrollo Asistido por IA",
      dotColor: "#B8C2D6",
      tagColor: "text-[#B8C2D6] border-[#B8C2D6]/30 hover:bg-[#B8C2D6]/10",
      technologies: ["ChatGPT", "Claude", "Gemini", "GitHub Copilot", "Codex"]
    },
    {
      category: "Estudiando Ahora",
      dotColor: "#10B981",
      tagColor: "text-[#10B981] border-[#10B981]/30 hover:bg-[#10B981]/10",
      technologies: ["React + Next.js", "Docker & Contenedores", "CI/CD", "N8N (Automatización)", "Cloud Computing"],
      footnote: "Trayectoria de crecimiento activo →"
    }
  ] as TechnologyGroup[],
  experience: [
    {
      company: "METRICA Perú",
      role: "Developer Semi Senior .NET",
      period: "ene. 2026 - Actualidad",
      modality: "Híbrido",
      client: "SGS Perú",
      responsibilities: [
        "Desarrollo y mantenimiento de APIs REST utilizando .NET y ASP.NET Core.",
        "Optimización de consultas complejas y Stored Procedures en SQL Server.",
        "Desarrollo y mantenimiento de funcionalidades frontend utilizando Angular.",
        "Integración entre aplicaciones empresariales y servicios internos.",
        "Elaboración de documentación técnica e implementación de mejoras de procesos."
      ],
      technologies: [".NET 9", "ASP.NET Core", "Angular", "SQL Server", "REST APIs", "Azure DevOps"]
    },
    {
      company: "SGS Perú",
      role: "Developer IT",
      period: "jul. 2025 - jun. 2026",
      modality: "Remoto",
      responsibilities: [
        "Desarrollo y mantenimiento de aplicaciones empresariales orientadas a procesos operativos y de laboratorio.",
        "Participación en el desarrollo de APIs e integraciones internas.",
        "Optimización de procesos y soporte evolutivo de plataformas corporativas.",
        "Mantenimiento de funcionalidades frontend utilizando Angular.",
        "Participación en pruebas, despliegues y soporte técnico."
      ],
      technologies: [".NET Core", "Angular", "SQL Server", "Entity Framework Core", "Azure DevOps"]
    },
    {
      company: "Protiviti Perú",
      role: "Desarrollador .NET / Application Support N3",
      period: "mar. 2023 - jul. 2025",
      modality: "Remoto",
      client: "SGS Perú",
      description: "Evolución profesional desde Desarrollador .NET Junior hasta Application Support N3, participando en proyectos de ciberseguridad, mantenimiento de aplicaciones empresariales y resolución de incidencias en producción.",
      responsibilities: [
        "Diagnóstico y solución de incidencias técnicas en entornos de producción.",
        "Soporte especializado Application Support N3 para aplicaciones .NET y Angular.",
        "Corrección de hallazgos de ciberseguridad reportados por Pentest.",
        "Debugging y análisis utilizando Swagger, Postman y SQL Server.",
        "Participación en pruebas, despliegues y soporte técnico."
      ],
      technologies: [".NET", "ASP.NET MVC", "Angular", "SQL Server", "Swagger", "Postman"]
    }
  ] as ExperienceEntry[],
  impact: {
    summary: "A lo largo de mi experiencia profesional he participado en el análisis, mantenimiento y mejora de aplicaciones empresariales utilizadas en procesos críticos para el negocio.",
    stats: [
      { value: "3+", label: "Años en sistemas críticos" },
      { value: "100+", label: "Resolución de incidencias" },
      { value: "SQL", label: "Optimización de base de datos" },
      { label: "Procesos automatizados", value: "APIs" }
    ],
    caseStudies: [
      {
        id: "db-opt",
        title: "Optimización de Bases de Datos",
        iconName: "database",
        iconColor: "#0EA5D9",
        description: "Participación en la optimización de consultas SQL Server y procedimientos almacenados orientados a mejorar de forma sustancial el rendimiento de aplicaciones empresariales.",
        technologies: ["SQL Server", "T-SQL", "Stored Procedures", "Query Optimization"],
        outcome: "Reducción en tiempos de ejecución de reportes críticos y eliminación de cuellos de botella.",
        outcomeColor: "text-[#10B981]"
      },
      {
        id: "prod-incidents",
        title: "Resolución de Incidencias en Producción",
        iconName: "alert-triangle",
        iconColor: "#EF4444",
        description: "Análisis técnico y solución de incidencias críticas reportadas por usuarios y áreas operativas, identificando la causa raíz y aplicando parches para asegurar la continuidad del negocio.",
        activities: ["Análisis de logs", "Revisión de consultas SQL", "Corrección de errores funcionales", "Validación de consistencia de datos", "Soporte técnico"],
        outcome: "Estabilidad de sistemas restaurada y documentación de lecciones aprendidas para el equipo.",
        outcomeColor: "text-[#3B82F6]"
      },
      {
        id: "api-services",
        title: "Desarrollo de APIs y Servicios",
        iconName: "settings",
        iconColor: "#3B82F6",
        description: "Diseño, implementación y mantenimiento de endpoints y APIs REST para la comunicación eficiente e integración entre múltiples sistemas internos y aplicaciones empresariales.",
        technologies: ["ASP.NET Core", "REST APIs", "Entity Framework Core", "SQL Server"],
        outcome: "Integraciones estables y seguras con arquitectura orientada a servicios.",
        outcomeColor: "text-[#10B981]"
      },
      {
        id: "automation",
        title: "Automatización de Procesos",
        iconName: "refresh",
        iconColor: "#60A5FA",
        description: "Participación activa en iniciativas orientadas a reducir las tareas manuales y la intervención humana mediante el desarrollo de lógica y automatizaciones dentro de los sistemas corporativos.",
        activities: ["Reducción de procesos manuales", "Mejor control y trazabilidad de información", "Optimización de tiempos de respuesta", "Mejora de la auditoría de datos"],
        outcome: "Procesos operativos acelerados y eliminación de errores de ingreso manual.",
        outcomeColor: "text-[#60A5FA]"
      }
    ] as ImpactCaseStudy[]
  },
  projects: [
    {
      title: "Portfolio Personal",
      status: "Completado",
      description: "Sitio web profesional responsivo y moderno desarrollado con Next.js App Router, TypeScript, Tailwind CSS y Framer Motion para presentar experiencia, conocimientos y proyectos tecnológicos de manera visualmente atractiva.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
      metric: "Producción y Vercel Ready",
      metricColor: "text-[#10B981]",
      links: {
        code: "https://github.com/miguelretamoso/portfolio"
      }
    },
    {
      title: "Sistema de Inventario",
      status: "En desarrollo",
      description: "Proyecto personal diseñado para el control integral de catálogo de productos, registro de movimientos de almacén, administración de stock y generación automática de reportes operativos.",
      stack: [".NET", "ASP.NET Core", "Angular", "SQL Server", "Entity Framework Core"],
      metric: "Desarrollo Activo",
      metricColor: "text-[#F59E0B]",
      links: {
        details: "#"
      }
    },
    {
      title: "DevJournal AI",
      status: "Próximamente",
      description: "Bitácora técnica en la nube orientada a desarrolladores de software para documentar incidencias operativas, resoluciones, aprendizajes y base de conocimientos técnicos utilizando inteligencia artificial para autocompletado y categorización.",
      stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Claude API", "PostgreSQL"],
      metric: "Planificado",
      metricColor: "text-[#B8C2D6]"
    },
    {
      title: "Dashboard de Finanzas Personales",
      status: "Concepto",
      description: "Aplicación conceptual enfocada en la salud financiera personal, que permite el seguimiento diario de gastos, proyección inteligente de pagos de tarjetas de crédito y visualización de indicadores mediante gráficos analíticos.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "PostgreSQL"],
      metric: "Fase de Diseño",
      metricColor: "text-[#B8C2D6]"
    }
  ] as ProjectEntry[],
  education: {
    summary: "La tecnología evoluciona constantemente y considero fundamental mantenerme actualizado en herramientas, arquitecturas y buenas prácticas de desarrollo.",
    learningTopics: [
      { name: "React y Next.js App Router", progress: 75 },
      { name: "Docker y Contenedores", progress: 45 },
      { name: "CI / CD & Pipelines", progress: 50 },
      { name: "N8N & Automatización de Procesos", progress: 40 },
      { name: "Cloud Computing (Azure / AWS)", progress: 55 }
    ] as LearningTopic[],
    courses: [
      "Desarrollo de Web APIs con ASP.NET Core",
      "Angular Moderno",
      "Bases de Datos SQL Server y Optimización de Consultas",
      "Entity Framework Core en producción",
      "Patrones de Diseño y Principios SOLID"
    ],
    objective: {
      title: "Objetivo Profesional",
      text: "Continuar fortaleciendo mis conocimientos en tecnologías modernas para diseñar soluciones escalables, mantenibles y alineadas con las necesidades del negocio. Mi meta es evolucionar hacia roles de mayor responsabilidad técnica, participando en proyectos empresariales de alto impacto y arquitectura de software."
    }
  }
};
