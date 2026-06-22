import { portfolioContent } from "@/data/content";

export default function Footer() {
  const { personalInfo } = portfolioContent;

  return (
    <footer className="border-t border-border bg-bg-secondary py-10 text-center text-xs font-mono text-[#B8C2D6]/40 relative z-10">
      <div className="max-w-7xl mx-auto px-6 space-y-2">
        <p>
          © 2025 Miguel Retamoso · {personalInfo.title} · {personalInfo.location}
        </p>
        <p className="text-[10px] text-[#B8C2D6]/20">
          Construido con Next.js + Tailwind CSS · Desplegado en Vercel
        </p>
      </div>
    </footer>
  );
}
