export interface NavItem {
  label: string;
  href: string;
}

export interface PainPointItem {
  id: string;
  problemTitle: string;
  problemDescription: string;
  solutionTitle: string;
  solutionDescription: string;
  iconName: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  badge: string;
  features: string[];
  techTags: string[];
  iconName: string;
  isFeatured?: boolean;
}

export interface ActiveProjectModule {
  name: string;
  status: "En desarrollo" | "Completado" | "En pruebas" | "Planificado";
  description: string;
}

export interface ActiveProjectData {
  title: string;
  subtitle: string;
  badge: string;
  clientType: string;
  objective: string;
  architectureHighlights: string[];
  modules: ActiveProjectModule[];
  techStack: string[];
  disclaimer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  credentials: string[];
  highlights: string[];
  image?: string;
  socials?: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle?: string;
  description: string;
  action?: string;
  deliverables?: string[];
  tags?: string[];
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  company?: string;
  email?: string;
  whatsapp?: string;
  message?: string;
}


