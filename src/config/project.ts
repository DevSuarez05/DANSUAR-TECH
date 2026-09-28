export interface ActiveProjectModule {
  name: string;
  status: "En desarrollo" | "Implementado" | "Fase de pruebas";
  description: string;
}

export const activeProjectData = {
  badge: "Proyecto actual",
  tagline: "Solución empresarial",
  title: "ERP Empresarial",
  description:
    "Actualmente estamos desarrollando e implementando un sistema ERP para una empresa, diseñado para centralizar y optimizar diferentes procesos de su operación.",
  dimensions: {
    development: {
      title: "Desarrollo",
      items: [
        "Arquitectura modular desacoplada de alto rendimiento",
        "Stack moderno con TypeScript, Next.js y PostgreSQL",
        "Control estricto de versiones y despliegue continuo",
      ],
    },
    modules: {
      title: "Módulos",
      items: [
        "Catálogo maestro & control multialmacén",
        "Gestión de órdenes de venta y facturación",
        "Compras, proveedores y seguimiento de pedidos",
        "Políticas de acceso por roles (RBAC) y auditoría",
      ],
    },
    processes: {
      title: "Procesos",
      items: [
        "Centralización de flujos operativos sin hojas de cálculo desconectadas",
        "Visibilidad integral del estado de entregas y despachos",
        "Trazabilidad de movimientos de inventario en tiempo real",
      ],
    },
    integrationAutomation: {
      title: "Integración & Automatización",
      items: [
        "Conexión con software contable mediante APIs REST",
        "Disparadores automáticos de alertas de stock mínimo",
        "Actualización y validación transaccional continua de datos",
      ],
    },
  },
  techStack: [
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Tailwind CSS",
    "Prisma ORM",
    "REST APIs",
  ],
};
