import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://miguelretamoso.dev"),
  title: "Miguel Retamoso | Desarrollador Full Stack Semi Senior",
  description: "Portafolio profesional de Miguel Retamoso, Desarrollador Full Stack con más de 3 años de experiencia en aplicaciones empresariales utilizando .NET, ASP.NET Core, SQL Server y Angular. Especializado en APIs REST, procedimientos almacenados y automatización de procesos.",
  keywords: [
    "Miguel Retamoso",
    "Miguel Alonso Retamoso Infante",
    "Full Stack Developer",
    "Desarrollador .NET",
    "ASP.NET Core",
    "SQL Server",
    "Angular",
    "TypeScript",
    "React",
    "Next.js",
    "SGS Perú",
    "Portafolio Profesional",
    "Lima",
    "Perú",
    "Desarrollador Semi Senior"
  ],
  authors: [{ name: "Miguel Alonso Retamoso Infante" }],
  creator: "Miguel Alonso Retamoso Infante",
  publisher: "Miguel Alonso Retamoso Infante",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Miguel Retamoso | Desarrollador Full Stack Semi Senior",
    description: "Más de 3 años desarrollando y manteniendo aplicaciones empresariales utilizando .NET, SQL Server y Angular.",
    url: "https://miguelretamoso.dev",
    siteName: "Miguel Retamoso Portfolio",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/images/foto-miguel.png",
        width: 1200,
        height: 630,
        alt: "Miguel Retamoso - Desarrollador Full Stack Semi Senior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miguel Retamoso | Desarrollador Full Stack Semi Senior",
    description: "Más de 3 años desarrollando y manteniendo aplicaciones empresariales utilizando .NET, SQL Server y Angular.",
    images: ["/images/foto-miguel.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

