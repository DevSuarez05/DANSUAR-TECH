"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Menu, X, ArrowRight } from "lucide-react";


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          ? "bg-[#050505]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]"
          : "bg-[#050505]/50 backdrop-blur-md border-b border-white/[0.04]"
      }`}
    >
      {/* Subtle top edge metallic hairline */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Corporate Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none"
            aria-label="DANSUAR TECH Inicio"
            id="brand-logo-link"
          >
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 p-[1px] border border-white/15 shadow-[0_0_20px_-5px_rgba(229,9,20,0.35)] group-hover:border-red-500/50 group-hover:shadow-[0_0_25px_-3px_rgba(229,9,20,0.55)] transition-all">
              <div className="h-full w-full bg-[#08080a] rounded-[11px] flex items-center justify-center">
                <span className="font-mono text-sm font-black text-white group-hover:scale-105 transition-transform flex items-center">
                  <span className="text-[#e50914] font-bold">&gt;</span>D
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg sm:text-xl tracking-tight text-white flex items-center gap-0.5">
                DANSUAR<span className="text-[#e50914] text-xl leading-none">.</span>TECH
              </span>
              <span className="text-[9px] uppercase tracking-[0.22em] text-zinc-400 font-mono">
                Software & IA Corporativa
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Navegación principal">
            {siteConfig.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs uppercase tracking-wider font-mono text-zinc-300 hover:text-white transition-colors py-1.5 relative group"
                id={`nav-link-${item.href.replace("#", "")}`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#e50914] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-900/60 border border-white/[0.08] text-[11px] text-zinc-400 font-mono">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e50914] shadow-[0_0_8px_#e50914] animate-pulse" />
              <span>B2B Enterprise</span>
            </div>

            <Button
              href="#contacto"
              variant="primary"
              size="sm"
              id="nav-cta-contact"
            >
              <span>Agendar Diagnóstico</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white focus-visible:ring-2 focus-visible:ring-[#e50914] focus-visible:outline-none cursor-pointer"
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
          className="md:hidden bg-[#070709]/98 border-b border-white/[0.08] backdrop-blur-2xl px-6 py-6 animate-in slide-in-from-top-4 duration-200"
        >
          <nav className="flex flex-col gap-3" aria-label="Menú móvil">
            {siteConfig.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium font-mono uppercase tracking-wider text-zinc-200 hover:text-[#e50914] focus-visible:ring-2 focus-visible:ring-[#e50914] focus-visible:outline-none py-2.5 border-b border-zinc-900 transition-colors"
                id={`mobile-nav-${item.href.replace("#", "")}`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3">
              <Button
                href="#contacto"
                variant="primary"
                className="w-full justify-center"
                onClick={() => setIsOpen(false)}
                id="mobile-nav-cta-contact"
              >
                <span>Agendar Diagnóstico</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>

  );
}
