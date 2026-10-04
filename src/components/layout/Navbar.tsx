"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { getWhatsAppUrl } from "@/lib/contact";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const whatsAppUrl = getWhatsAppUrl();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/92 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.85)]"
          : "bg-[#050505]/60 backdrop-blur-md border-b border-white/[0.04]"
      }`}
    >
      {/* Subtle top edge metallic hairline */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Corporate Brand Logo */}
          <Link
            href="/"
            className="flex items-center group focus-visible:outline-none py-1"
            aria-label="DANSUAR TECH Inicio"
            id="brand-logo-link"
          >
            <div className="relative h-13 sm:h-15 w-auto flex items-center">
              <Image
                src="/branding/dansuar-tech-logo-official.png"
                alt="DANSUAR TECH - Impulsando Negocios con Software e Inteligencia Artificial"
                width={166}
                height={140}
                quality={100}
                priority
                className="h-13 sm:h-15 w-auto object-contain drop-shadow-[0_0_18px_rgba(0,102,255,0.45)] group-hover:drop-shadow-[0_0_28px_rgba(0,210,255,0.8)] group-hover:scale-105 transition-all duration-300"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7" aria-label="Navegación principal">
            {siteConfig.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs uppercase tracking-wider font-mono text-zinc-300 hover:text-white transition-colors py-1.5 relative group"
                id={`nav-link-${item.href.replace("#", "") || "inicio"}`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00D2FF] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-900/60 border border-white/[0.08] text-[11px] text-zinc-400 font-mono">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF] animate-pulse" />
              <span>B2B Enterprise</span>
            </div>

            {/* CTA: Hablar con nosotros -> Abre WhatsApp */}
            <Button
              href={whatsAppUrl}
              isExternal
              variant="primary"
              size="sm"
              id="nav-cta-whatsapp"
              className="gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Hablar con nosotros</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white focus-visible:ring-2 focus-visible:ring-[#0066FF] focus-visible:outline-none cursor-pointer"
              aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation-menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          id="mobile-navigation-menu"
          className="lg:hidden bg-[#070709]/98 border-b border-white/[0.08] backdrop-blur-2xl px-6 py-6 animate-in slide-in-from-top-4 duration-200"
        >
          <nav className="flex flex-col gap-3" aria-label="Menú móvil">
            {siteConfig.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium font-mono uppercase tracking-wider text-zinc-200 hover:text-[#00D2FF] focus-visible:ring-2 focus-visible:ring-[#0066FF] focus-visible:outline-none py-2.5 border-b border-zinc-900 transition-colors"
                id={`mobile-nav-${item.href.replace("#", "") || "inicio"}`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3">
              <Button
                href={whatsAppUrl}
                isExternal
                variant="primary"
                className="w-full justify-center gap-2"
                onClick={() => setIsOpen(false)}
                id="mobile-nav-cta-whatsapp"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Hablar con nosotros</span>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>


  );
}
