export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: "Bot" | "Workflow" | "Code2" | "Layers" | "Network" | "Compass";
  tag: string;
  highlights: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "inteligencia-artificial",
    number: "01",
    title: "Inteligencia Artificial",
    description:
      "Implementamos soluciones de IA orientadas a mejorar procesos, análisis y operaciones empresariales.",
    iconName: "Bot",
    tag: "Modelos & Agentes",
    highlights: ["Agentes autónomos", "RAG sobre datos privados", "Extracción inteligente"],
  },
  {
    id: "automatizacion",
    number: "02",
    title: "Automatización",
    description:
      "Automatizamos tareas y flujos de trabajo para reducir procesos manuales y mejorar la eficiencia.",
    iconName: "Workflow",
    tag: "Workflows & Eventos",
    highlights: ["Flujos transaccionales", "Eliminación de fricción manual", "Reglas de negocio"],
  },
  {
    id: "desarrollo-software",
    number: "03",
    title: "Desarrollo de Software",
    description:
      "Construimos aplicaciones y plataformas web personalizadas según las necesidades del negocio.",
    iconName: "Code2",
    tag: "Web & Cloud",
    highlights: ["Arquitectura escalable", "Interfaces de alto rendimiento", "Código propietario"],
  },
  {
    id: "sistemas-erp",
    number: "04",
    title: "Sistemas ERP",
    description:
      "Desarrollamos sistemas empresariales para centralizar y gestionar procesos de negocio.",
    iconName: "Layers",
    tag: "Core Operativo",
    highlights: ["Inventario & Compras", "Facturación & Reportes", "Control centralizado"],
  },
  {
    id: "integraciones-apis",
    number: "05",
    title: "Integraciones y APIs",
    description:
      "Conectamos sistemas, plataformas y servicios para crear ecosistemas digitales integrados.",
    iconName: "Network",
    tag: "Interoperabilidad",
    highlights: ["Siigo Cloud API", "Pasarelas de pago", "Webhooks bidireccionales"],
  },
  {
    id: "soluciones-medida",
    number: "06",
    title: "Soluciones a la medida",
    description:
      "Analizamos el problema y diseñamos una solución tecnológica específica para cada organización.",
    iconName: "Compass",
    tag: "Consultoría & Diseño",
    highlights: ["Diagnóstico técnico", "Alineación estratégica", "Ingeniería adaptada"],
  },
];
