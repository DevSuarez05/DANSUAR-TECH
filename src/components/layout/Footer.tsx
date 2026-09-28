import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { LinkedInIcon, GitHubIcon } from "@/components/ui/SocialIcons";
import { formatWhatsAppDisplay, getWhatsAppUrl } from "@/lib/contact";
import { Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsAppDisplayNumber = formatWhatsAppDisplay();
  const whatsAppUrl = getWhatsAppUrl();

  return (
    <footer className="border-t border-white/[0.08] bg-[#050505] pt-16 pb-12 relative overflow-hidden" id="footer">
      {/* Top subtle technological ambient glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-[#e50914]/40 to-transparent" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-white/[0.06]">
          {/* 1. Brand identity + Logo Real */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3.5 group" id="footer-logo">
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-white/20 bg-black p-[2px] shadow-[0_0_20px_-4px_rgba(229,9,20,0.45)] group-hover:border-red-500/50 transition-all flex-shrink-0">
                <Image
                  src="/branding/dansuar-tech-emblem-4k.png"
                  alt="Logo DANSUAR TECH"
                  width={128}
                  height={128}
                  quality={100}
                  unoptimized
                  className="w-full h-full object-contain rounded-[12px]"
                />
              </div>
              <div>
                <span className="font-bold text-xl tracking-tight text-white block">
                  DANSUAR<span className="text-[#e50914]">.</span>TECH
                </span>
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                  Software & Inteligencia Artificial
                </span>
              </div>
            </Link>

            <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
              &quot;Impulsando negocios con software e inteligencia artificial.&quot;
            </p>

            {/* Social Icons row */}
            <div className="pt-2 flex items-center gap-2.5">
              {/* WhatsApp */}
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
                className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 hover:border-red-500/50 hover:bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-200 group"
                id="footer-social-whatsapp"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                aria-label="Enviar correo corporativo"
                className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 hover:border-red-500/50 hover:bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-200 group"
                id="footer-social-email"
              >
                <Mail className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:scale-110 transition-all" />
              </a>

              {/* LinkedIn (preparado sin URL inventada) */}
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil LinkedIn DANSUAR TECH"
                className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 hover:border-red-500/50 hover:bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-200 group"
                id="footer-social-linkedin"
              >
                <LinkedInIcon className="w-4 h-4 text-zinc-400 group-hover:text-[#0a66c2] group-hover:scale-110 transition-all" />
              </a>

              {/* GitHub */}
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Repositorio GitHub DANSUAR TECH"
                className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 hover:border-red-500/50 hover:bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-200 group"
                id="footer-social-github"
              >
                <GitHubIcon className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:scale-110 transition-all" />
              </a>
            </div>
          </div>

          {/* 2. Contact Direct Info */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 font-mono">
              Contacto
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-[11px] font-mono uppercase text-zinc-400 block mb-0.5">
                  WhatsApp:
                </span>
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-zinc-200 hover:text-white transition-colors inline-flex items-center gap-1.5"
                  id="footer-whatsapp-number-link"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>{whatsAppDisplayNumber}</span>
                </a>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase text-zinc-400 block mb-0.5">
                  Email:
                </span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="font-mono text-zinc-200 hover:text-white transition-colors inline-flex items-center gap-1.5 break-all"
                  id="footer-email-link"
                >
                  <Mail className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* 3. Quick Navigation Links */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 font-mono">
              Navegación
            </h3>
            <ul className="space-y-2 text-sm text-zinc-400 font-normal">
              {siteConfig.navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Especialidades */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 font-mono">
              Especialidades
            </h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>Sistemas ERP & Modular</li>
              <li>Inteligencia Artificial</li>
              <li>Integración Siigo ERP</li>
              <li>Arquitectura Cloud</li>
            </ul>

            <div className="pt-2">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-zinc-200 hover:text-white transition-colors border border-white/10 rounded-lg px-3 py-2 bg-zinc-900/60 hover:bg-zinc-800 hover:border-red-500/40"
                id="footer-whatsapp-cta-button"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Canal Directo</span>
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
