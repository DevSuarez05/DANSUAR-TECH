import { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    action: "Entendemos",
    title: "01 — Entendemos",
    subtitle: "Inmersión & Diagnóstico",
    description:
      "Analizamos el problema, los procesos y los objetivos del negocio.",
    tags: ["Mapeo de Procesos", "Análisis de Requisitos", "Objetivos de Negocio"],
    deliverables: [
      "Diagnóstico operativo detallado",
      "Definición de alcance y prioridades",
      "Estimación de viabilidad y ROI",
    ],
  },
  {
    step: "02",
    action: "Diseñamos",
    title: "02 — Diseñamos",
    subtitle: "Arquitectura & Estrategia",
    description:
      "Definimos la solución tecnológica y la arquitectura adecuada.",
    tags: ["Arquitectura Cloud", "Modelado de Datos", "UX / UI Técnico"],
    deliverables: [
      "Blueprint de arquitectura del sistema",
      "Especificación de APIs e integraciones",
      "Flujos de interacción y prototipado",
    ],
  },
  {
    step: "03",
    action: "Construimos",
    title: "03 — Construimos",
    subtitle: "Ingeniería & Despliegue",
    description:
      "Desarrollamos, integramos y probamos la solución.",
    tags: ["Desarrollo Ágil", "Integración Continua", "Testing & QA"],
    deliverables: [
      "Código robusto y documentado",
      "Integraciones validadas en staging",
      "Pruebas de estrés y seguridad",
    ],
  },
  {
    step: "04",
    action: "Evolucionamos",
    title: "04 — Evolucionamos",
    subtitle: "Escala & Optimización",
    description:
      "Mejoramos la solución según las necesidades del negocio.",
    tags: ["Monitoreo Proactivo", "Optimización IA", "Nuevas Capacidades"],
    deliverables: [
      "Telemetría y analítica de rendimiento",
      "Soporte técnico y mantenimiento continuo",
      "Roadmap evolutivo según métricas reales",
    ],
  },
];

