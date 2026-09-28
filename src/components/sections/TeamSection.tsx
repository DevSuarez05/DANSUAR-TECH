"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { founderData } from "@/config/team";
import {
  ArrowRight,
  Bot,
  Briefcase,
  Code2,
  GraduationCap,
} from "lucide-react";


export function TeamSection() {
  const pillarIcons = {
    Software: <Code2 className="w-5 h-5 text-[#ff3844]" />,
    "Inteligencia Artificial": <Bot className="w-5 h-5 text-[#ff3844]" />,
    Negocios: <Briefcase className="w-5 h-5 text-[#ff3844]" />,
  };

  return (
    <section className="py-28 sm:py-36 bg-[#050505] relative border-t border-white/[0.06] overflow-hidden" id="nosotros">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/[0.05] rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900/90 border border-white/10 shadow-sm mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e50914] shadow-[0_0_8px_#ff2b36] animate-pulse" />
            <span className="font-mono text-xs text-zinc-300 font-medium tracking-wider uppercase">
              Liderazgo & Dirección
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.16]">
            Detrás de{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#ff3844] via-[#e50914] to-[#ff2b36] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(229,9,20,0.35)]">
                DANSUAR TECH
              </span>
            </span>
          </h2>
        </div>

        {/* Executive Profile Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#08080b]/90 border border-white/10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.9),0_0_35px_-10px_rgba(229,9,20,0.15)] p-6 sm:p-10 lg:p-12 backdrop-blur-xl relative overflow-hidden">
          
          {/* Subtle top edge metallic hairline */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff3844] to-transparent" />

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12">
            
            {/* Founder Photography (Compact, professional, not too large) */}
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="relative group">
                {/* Ambient glow behind the portrait */}
                <div 
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-600/30 to-transparent blur-xl group-hover:blur-2xl transition-all duration-300 opacity-60"
                  aria-hidden="true" 
                />

                {/* Picture Frame */}
                <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-2xl p-[2px] bg-gradient-to-b from-white/20 via-zinc-800 to-zinc-950 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.9)] overflow-hidden">
                  <Image
                    src={founderData.image}
                    alt={founderData.name}
                    width={220}
                    height={220}
                    priority
                    className="w-full h-full object-cover rounded-[14px] group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Status Dot Pill */}
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-[#0a0a0d] border border-white/15 text-[10px] font-mono text-zinc-300 shadow-md flex items-center gap-1.5 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Disponible</span>
                </div>
              </div>

              {/* Academic & Professional Badges */}
              <div className="mt-6 flex flex-col gap-2 text-center w-full max-w-[200px]">
                <div className="flex items-center justify-center gap-1.5 text-[11px] font-mono text-zinc-400 bg-zinc-900/80 px-2.5 py-1 rounded-lg border border-white/5">
                  <GraduationCap className="w-3.5 h-3.5 text-zinc-300" />
                  <span>SENA • Software</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 text-[11px] font-mono text-zinc-400 bg-zinc-900/80 px-2.5 py-1 rounded-lg border border-white/5">
                  <GraduationCap className="w-3.5 h-3.5 text-[#ff3844]" />
                  <span>U. Nacional • Admin</span>
                </div>
              </div>
            </div>

            {/* Narrative & Content */}
            <div className="flex-1 text-center md:text-left">
              {/* Name & Role */}
              <div className="mb-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1.5">
                  {founderData.name}
                </h3>
                <p className="text-xs sm:text-sm font-mono font-medium text-[#ff3844] uppercase tracking-wider flex items-center justify-center md:justify-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ff3844]" />
                  {founderData.role}
                </p>
              </div>

              {/* Exact Bio Text */}
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-8 font-normal">
                {founderData.bio}
              </p>

              {/* 3 Key Pillars: Software • Inteligencia Artificial • Negocios */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                {founderData.pillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="p-4 rounded-xl bg-zinc-950/80 border border-white/[0.08] hover:border-red-500/30 transition-colors group flex flex-col justify-between text-left"
                  >
                    <div>
                      <div className="p-2 rounded-lg bg-zinc-900 border border-white/5 w-fit mb-2.5 group-hover:scale-105 transition-transform">
                        {pillarIcons[pillar.title as keyof typeof pillarIcons]}
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-white mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-[11px] text-zinc-400 leading-snug">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA: Conocer DANSUAR TECH */}
              <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center gap-4">
                <Button
                  href="#servicios"
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto font-semibold shadow-[0_0_24px_-4px_rgba(229,9,20,0.5)] group"
                  id="founder-cta-button"
                >
                  <span>Conocer DANSUAR TECH</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                </Button>

                <span className="text-xs font-mono text-zinc-500 text-center sm:text-left">
                  Ingeniería de software con propósito de negocio
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
