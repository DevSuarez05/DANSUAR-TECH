import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Mail, MapPin, MessageSquare, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#050505] pt-16 pb-12 relative overflow-hidden">
      {/* Top subtle technological ambient glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-[#e50914]/40 to-transparent" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 pb-12 border-b border-white/[0.06]">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3" id="footer-logo">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 p-[1px] border border-white/15 shadow-[0_0_15px_-3px_rgba(229,9,20,0.3)]">
                <div className="h-full w-full bg-[#08080a] rounded-[11px] flex items-center justify-center">
                  <span className="font-mono text-xs font-black text-white flex items-center">
                    <span className="text-[#e50914] font-bold">&gt;</span>D
                  </span>
                </div>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                DANSUAR<span className="text-[#e50914]">.</span>TECH
              </span>
            </Link>

            <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
              Agencia de tecnología especializada en arquitectura de software empresarial, automatización con inteligencia artificial y desarrollo de sistemas ERP a la medida.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-zinc-400 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                <span>{siteConfig.contact.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-zinc-400" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 font-mono">
              Navegación
            </h3>
            <ul className="space-y-2 text-sm text-zinc-400 font-normal">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contacto"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Diagnóstico Técnico</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Services Quicklist & WhatsApp CTA */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 font-mono">
              Especialidades
            </h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>Sistemas ERP & Gestión Modular</li>
              <li>Inteligencia Artificial Corporativa</li>
              <li>Integración de APIs & Siigo ERP</li>
              <li>Plataformas Cloud & Web Escalables</li>
            </ul>

            <div className="pt-3">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-zinc-200 hover:text-white transition-colors border border-white/10 rounded-lg px-3 py-2 bg-zinc-900/60 hover:bg-zinc-800 hover:border-red-500/40"
                id="footer-whatsapp-link"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#e50914]" />
                <span>Canal Directo WhatsApp</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {currentYear} DANSUAR TECH. Todos los derechos reservados.</p>
          <p className="font-mono text-zinc-400">
            Ingeniería de Software & Negocios • Bogotá, Colombia
          </p>
        </div>
      </Container>
    </footer>
  );
}
