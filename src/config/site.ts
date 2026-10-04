const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") || "";
const formattedPhone =
  whatsappNumber && whatsappNumber.startsWith("57") && whatsappNumber.length === 12
    ? `+57 ${whatsappNumber.slice(2, 5)} ${whatsappNumber.slice(5, 8)} ${whatsappNumber.slice(8)}`
    : whatsappNumber
    ? `+${whatsappNumber}`
    : "+57 (WhatsApp no configurado)";

export const siteConfig = {
  name: "DANSUAR TECH",
  legalName: "DANSUAR TECH",
  tagline: "Impulsando negocios con software e inteligencia artificial.",
  description:
    "Agencia de tecnología especializada en arquitectura de software empresarial, automatización con inteligencia artificial, ERPs a medida e integraciones de alta fidelidad.",
  url: "https://dansuar.tech",
  ogImage: "/branding/dansuar-tech-logo-official.png",
  logo: "/branding/dansuar-tech-logo-official.png",
  contact: {
    email: "danielandres2907@gmail.com",
    phone: formattedPhone,
    whatsappUrl: whatsappNumber
      ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola DANSUAR TECH, quiero hablar sobre un proyecto.")}`
      : "#contacto",
    location: "Colombia • Atención remota global",
    hours: "Lunes a Viernes • 8:00 AM - 6:00 PM (COT)",
  },
  links: {
    github: "https://github.com/DevSuarez05/DANSUAR-TECH",
    linkedin: "#",
  },
  navItems: [
    { label: "Inicio", href: "#" },
    { label: "Servicios", href: "#servicios" },
    { label: "Proceso", href: "#como-trabajamos" },
    { label: "Proyecto", href: "#proyecto-actual" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ],
  statsSummary: [
    { value: "100%", label: "Enfoque en retorno de inversión" },
    { value: "0 Humo", label: "Arquitectura transparente y medible" },
    { value: "B2B", label: "Sistemas para operaciones reales" },
  ],
};

