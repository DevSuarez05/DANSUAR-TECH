"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/config/process";
import { Search, Layers, Code2, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";

// Iconos minimalistas para cada uno de los 4 pasos
const stepIcons = [
  Search,       // 01 — Entendemos
  Layers,       // 02 — Diseñamos
  Code2,        // 03 — Construimos
  TrendingUp,   // 04 — Evolucionamos
];

export function ProcessSection() {
  return (
    <section
      className="py-24 sm:py-32 bg-[#050505] relative border-t border-white/[0.06] overflow-hidden"
      id="como-trabajamos"
    >
      {/* Backwards-compatible anchor for navbar links */}
      <div id="metodologia" className="absolute -top-24 pointer-events-none" />

      {/* Ambient background glow behind the process timeline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-red-600/[0.03] blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          badge="Metodología de Trabajo"
          badgeVariant="red"
          title="¿Cómo trabajamos?"
          highlightedText="Metodología & Resultados"
          highlightVariant="silver"
          subtitle="Un proceso estructurado de 4 fases que elimina la incertidumbre, asegurando precisión técnica, entregas predecibles y valor continuo para tu negocio."
          align="center"
          className="mb-16 sm:mb-20"
        />

        {/* ======================================================== */}
        {/* DESKTOP VIEW: Horizontal visual line connecting all 4 steps */}
        {/* ======================================================== */}
        <div className="hidden md:block relative">
          {/* Continuous horizontal timeline line */}
          <div className="absolute top-[38px] left-[12.5%] right-[12.5%] h-[2px] z-0">
            {/* Base subtle rail */}
            <div className="w-full h-full bg-white/[0.08]" />
            {/* Glowing red gradient overlay with subtle breathing animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e50914]/80 to-transparent shadow-[0_0_12px_rgba(229,9,20,0.5)] animate-pulse" />
          </div>

          {/* 4 steps grid */}
          <div className="grid grid-cols-4 gap-6 lg:gap-8 relative z-10">
            {processSteps.map((step, idx) => {
              const Icon = stepIcons[idx % stepIcons.length];
              return (
                <div
                  key={step.step}
                  className="group flex flex-col items-center text-center"
                >
                  {/* Central Node on horizontal line */}
                  <div className="relative mb-8">
                    {/* Outer animated halo on hover */}
                    <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#e50914]/0 via-[#e50914]/25 to-[#e50914]/0 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Step Icon Container */}
                    <div className="relative w-[76px] h-[76px] rounded-2xl bg-[#09090c] border border-white/15 group-hover:border-red-500/60 p-[1px] transition-all duration-300 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.8)] group-hover:shadow-[0_0_30px_-5px_rgba(229,9,20,0.4)] group-hover:-translate-y-1">
                      <div className="w-full h-full rounded-[15px] bg-gradient-to-b from-[#141419] to-[#09090c] flex flex-col items-center justify-center relative overflow-hidden">
                        {/* Subtle metallic top highlight */}
                        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        
                        <Icon className="w-6 h-6 text-zinc-300 group-hover:text-red-400 transition-colors duration-300 stroke-[1.75]" />
                        
                        {/* Micro indicator dot */}
                        <div className="mt-1.5 flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-[#e50914] group-hover:shadow-[0_0_6px_#e50914] transition-all duration-300" />
                        </div>
                      </div>
                    </div>

                    {/* Step sequence badge under node */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-[#08080a] border border-white/10 text-[10px] font-mono text-zinc-400 group-hover:text-white group-hover:border-red-500/40 transition-colors duration-300 whitespace-nowrap">
                      Paso {step.step}
                    </div>
                  </div>

                  {/* Card Container with Big Number & Content */}
                  <div className="w-full text-left rounded-2xl p-6 bg-[#0c0c0f]/80 backdrop-blur-md border border-white/[0.08] group-hover:border-red-500/30 transition-all duration-300 flex-1 flex flex-col justify-between group-hover:-translate-y-1.5 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.9),0_0_25px_-8px_rgba(229,9,20,0.2)] relative overflow-hidden">
                    {/* Big Stylized Number Background */}
                    <div className="absolute top-2 right-3 select-none pointer-events-none">
                      <span className="font-mono text-6xl lg:text-7xl font-black text-white/[0.04] group-hover:text-red-500/[0.09] transition-colors duration-500 tracking-tighter leading-none">
                        {step.step}
                      </span>
                    </div>

                    {/* Step Content */}
                    <div className="relative z-10">
                      {/* Step Header with Action */}
                      <div className="mb-3">
                        <span className="text-[11px] font-mono uppercase tracking-widest text-[#e50914] font-semibold block mb-1">
                          Fase 0{idx + 1}
                        </span>
                        <h3 className="text-lg lg:text-xl font-bold text-white group-hover:text-zinc-100 transition-colors tracking-tight">
                          {step.title}
                        </h3>
                      </div>

                      {/* Exact description requested by user */}
                      <p className="text-sm text-zinc-300 leading-relaxed font-normal mb-5">
                        {step.description}
                      </p>
                    </div>

                    {/* Subtle tags / deliverables */}
                    <div className="relative z-10 pt-4 border-t border-white/[0.06] mt-auto">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {step.tags?.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="inline-block px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono text-zinc-400 group-hover:text-zinc-300 group-hover:border-white/10 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {step.deliverables && (
                        <div className="space-y-1.5">
                          {step.deliverables.map((item, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-1.5 text-[11px] text-zinc-400">
                              <CheckCircle2 className="w-3 h-3 text-[#e50914] flex-shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ======================================================== */}
        {/* MOBILE VIEW: Vertical visual line connecting all 4 steps */}
        {/* ======================================================== */}
        <div className="md:hidden relative">
          {/* Continuous vertical timeline line */}
          <div className="absolute top-6 bottom-8 left-[24px] w-[2px] z-0">
            {/* Base subtle vertical rail */}
            <div className="w-full h-full bg-white/[0.08]" />
            {/* Glowing red gradient line */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#e50914] via-[#e50914]/60 to-transparent shadow-[0_0_8px_rgba(229,9,20,0.5)]" />
          </div>

          {/* 4 steps vertical list */}
          <div className="space-y-6 relative z-10">
            {processSteps.map((step, idx) => {
              const Icon = stepIcons[idx % stepIcons.length];
              return (
                <div key={step.step} className="flex items-start gap-4 group">
                  {/* Left Node on vertical line */}
                  <div className="relative flex-shrink-0 mt-1">
                    <div className="w-[50px] h-[50px] rounded-xl bg-[#0a0a0d] border border-white/15 group-hover:border-red-500/60 p-[1px] transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
                      <div className="w-full h-full rounded-[11px] bg-gradient-to-b from-[#16161b] to-[#09090c] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-zinc-300 group-hover:text-red-400 transition-colors stroke-[1.75]" />
                      </div>
                    </div>

                    {/* Step number badge below icon */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-1.5 py-0.2 rounded-full bg-[#050505] border border-white/10 text-[9px] font-mono text-zinc-400 font-semibold">
                      {step.step}
                    </div>
                  </div>

                  {/* Right Content Card */}
                  <div className="flex-1 rounded-xl p-5 bg-[#0c0c0f]/90 backdrop-blur-md border border-white/[0.08] group-hover:border-red-500/30 transition-all duration-300 relative overflow-hidden">
                    {/* Big stylized number in mobile background */}
                    <div className="absolute top-1 right-2 select-none pointer-events-none">
                      <span className="font-mono text-5xl font-black text-white/[0.05] tracking-tighter">
                        {step.step}
                      </span>
                    </div>

                    <div className="relative z-10">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#e50914] font-semibold block mb-0.5">
                        Fase 0{idx + 1}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white mb-2 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal mb-4">
                        {step.description}
                      </p>

                      {/* Deliverables snippet */}
                      {step.deliverables && (
                        <div className="pt-3 border-t border-white/[0.06] space-y-1.5">
                          {step.deliverables.map((item, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-1.5 text-xs text-zinc-400">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#e50914] flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom subtle methodology reassurance bar */}
        <div className="mt-14 sm:mt-16 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-white/[0.02] via-white/[0.04] to-white/[0.02] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-[#e50914] shadow-[0_0_8px_#e50914] animate-pulse flex-shrink-0" />
            <p className="text-xs sm:text-sm text-zinc-300 font-mono">
              <span className="text-white font-semibold">Garantía de Entrega:</span> Cada ciclo cuenta con demostraciones funcionales, código auditable y total transparencia operativa.
            </p>
          </div>
          <a
            href="#contacto"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#e50914] hover:text-white transition-colors group flex-shrink-0"
          >
            <span>Iniciar diagnóstico</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </Container>
    </section>
  );
}

