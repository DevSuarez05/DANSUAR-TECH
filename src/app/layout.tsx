import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "DANSUAR TECH | Inteligencia Artificial, Automatización y Software",
    template: "%s | DANSUAR TECH",
  },
  description:
    "Desarrollamos soluciones de software, inteligencia artificial y automatización para empresas.",
  applicationName: "DANSUAR TECH",
  keywords: [
    "DANSUAR TECH",
    "Inteligencia Artificial",
    "Automatización",
    "Desarrollo de Software",
    "Sistemas ERP a medida",
    "Automatización de procesos",
    "Integración Siigo ERP",
    "Software para empresas Colombia",
    "Daniel Andrés Suárez Ramírez",
  ],
  authors: [{ name: "Daniel Andrés Suárez Ramírez", url: siteConfig.url }],
  creator: "Daniel Andrés Suárez Ramírez",
  publisher: "DANSUAR TECH",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [
      { url: "/branding/dansuar-tech-logo.jpg" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/branding/dansuar-tech-logo.jpg" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteConfig.url,
    title: "DANSUAR TECH | Inteligencia Artificial, Automatización y Software",
    description:
      "Desarrollamos soluciones de software, inteligencia artificial y automatización para empresas.",
    siteName: "DANSUAR TECH",
    images: [
      {
        url: "/branding/dansuar-tech-logo.jpg",
        width: 1200,
        height: 630,
        alt: "DANSUAR TECH Logo Oficial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DANSUAR TECH | Inteligencia Artificial, Automatización y Software",
    description:
      "Desarrollamos soluciones de software, inteligencia artificial y automatización para empresas.",
    creator: "@dansuartech",
    images: ["/branding/dansuar-tech-logo.jpg"],
  },
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
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    founder: {
      "@type": "Person",
      name: "Daniel Andrés Suárez Ramírez",
      jobTitle: "CEO & Founder",
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "SENA",
        },
        {
          "@type": "EducationalOrganization",
          name: "Universidad Nacional de Colombia",
        },
      ],
    },
    areaServed: "Global",
    knowsAbout: [
      "Software Engineering",
      "Enterprise Resource Planning",
      "Artificial Intelligence",
      "Process Automation",
      "System Integrations",
    ],
  };

  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#050505] text-zinc-100 antialiased selection:bg-[#e50914] selection:text-white">
        {/* Enlace accesible para saltar directo al contenido con teclado */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#e50914] focus:text-white focus:font-mono focus:text-xs focus:rounded-xl focus:shadow-[0_0_20px_rgba(229,9,20,0.6)] focus:outline-none"
        >
          Saltar al contenido principal
        </a>
        {children}
      </body>

    </html>
  );
}
