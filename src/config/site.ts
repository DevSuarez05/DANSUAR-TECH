const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") || "573000000000";

export const siteConfig = {
  name: "DANSUAR TECH",
  legalName: "DANSUAR TECH",
  tagline: "Impulsando negocios con software e inteligencia artificial.",
  description:
    "Agencia de tecnología especializada en arquitectura de software empresarial, automatización con inteligencia artificial, ERPs a medida e integraciones de alta fidelidad.",
  url: "https://dansuar.tech",
  ogImage: "/og-image.png",
  contact: {
    email: "contacto@dansuar.tech",
    phone: "+57 300 000 0000",
    whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola DANSUAR TECH, quiero hablar sobre un proyecto.")}`,
    location: "Colombia • Atención remota global",
    hours: "Lunes a Viernes • 8:00 AM - 6:00 PM (COT)",
  },

  navItems: [
    { label: "Servicios", href: "#servicios" },
    { label: "Proyecto Actual", href: "#proyecto-actual" },
    { label: "Cómo trabajamos", href: "#como-trabajamos" },
    { label: "Equipo", href: "#nosotros" },
  ],
  statsSummary: [
    { value: "100%", label: "Enfoque en retorno de inversión" },
    { value: "0 Humo", label: "Arquitectura transparente y medible" },
    { value: "B2B", label: "Sistemas para operaciones reales" },
  ],
};
