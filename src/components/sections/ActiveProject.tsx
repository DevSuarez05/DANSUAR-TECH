"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { activeProjectData } from "@/config/project";
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  Code2,
  Database,
  Network,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";


export function ActiveProject() {
  return (
    <section className="py-28 sm:py-36 bg-[#050505] relative border-t border-white/[0.06] overflow-hidden" id="proyecto-actual">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-blue-600/[0.06] rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" aria-hidden="true" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900/90 border border-white/10 shadow-sm mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF] animate-pulse" />
            <span className="font-mono text-xs text-zinc-300 font-medium tracking-wider uppercase">
              {activeProjectData.badge}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.16]">
            Construyendo{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#00D2FF] via-[#0066FF] to-[#38BDF8] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,102,255,0.35)]">
                soluciones empresariales reales.
              </span>
            </span>
          </h2>
        </div>

        {/* Premium Project Card */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#08080b]/95 border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_-10px_rgba(0,102,255,0.2)] overflow-hidden backdrop-blur-xl relative">
          
          {/* Card Top Glow Accent */}
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#00D2FF] to-transparent" />

          {/* Header Bar */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-white/[0.08] bg-[#0c0c11]/80">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-zinc-900 border border-white/10 text-white shadow-[0_0_20px_-5px_rgba(0,102,255,0.4)]">
                  <Database className="w-6 h-6 text-[#00D2FF]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00D2FF] flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00D2FF] animate-pulse" />
                      En desarrollo
                    </span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-xs font-mono text-zinc-400">
                      {activeProjectData.tagline}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {activeProjectData.title}
                  </h3>
                </div>
              </div>

              {/* Status Pill */}
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-zinc-900/90 border border-white/10 text-xs font-mono text-zinc-300 w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Fase Activa de Implementación</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-4xl font-normal">
              {activeProjectData.description}
            </p>
          </div>

          {/* Main Visual Dimensions Grid: Desarrollo, Módulos, Procesos, Integración & Automatización */}
          <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#07070a]">
            
            {/* 1. DESARROLLO */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.08] hover:border-white/[0.18] transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-zinc-900 border border-white/5 text-zinc-200">
                      <Code2 className="w-4 h-4 text-[#00D2FF]" />
                    </div>
                    <h4 className="text-base font-bold text-white">Desarrollo</h4>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500">Arquitectura</span>
                </div>

                <div className="space-y-2.5">
                  {activeProjectData.dimensions.development.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-[#00D2FF] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Badges */}
              <div className="pt-4 mt-5 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                {activeProjectData.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 2. MÓDULOS */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.08] hover:border-white/[0.18] transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-zinc-900 border border-white/5 text-zinc-200">
                      <Boxes className="w-4 h-4 text-[#00D2FF]" />
                    </div>
                    <h4 className="text-base font-bold text-white">Módulos del Sistema</h4>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500">Funcionalidades</span>
                </div>

                <div className="space-y-2.5">
                  {activeProjectData.dimensions.modules.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00D2FF] mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-5 border-t border-white/[0.06] text-xs font-mono text-zinc-500 flex items-center justify-between">
                <span>Estado: Construcción activa por componentes</span>
                <span className="text-zinc-400">Modular & Desacoplado</span>
              </div>
            </div>

            {/* 3. PROCESOS */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.08] hover:border-white/[0.18] transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-zinc-900 border border-white/5 text-zinc-200">
                      <Workflow className="w-4 h-4 text-[#00D2FF]" />
                    </div>
                    <h4 className="text-base font-bold text-white">Procesos Operativos</h4>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500">Operación</span>
                </div>

                <div className="space-y-2.5">
                  {activeProjectData.dimensions.processes.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-[#00D2FF] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-5 border-t border-white/[0.06] text-xs font-mono text-zinc-500 flex items-center justify-between">
                <span>Impacto: Eliminación de reprocesos manuales</span>
                <span className="text-zinc-400">Eficiencia Operativa</span>
              </div>
            </div>

            {/* 4. INTEGRACIÓN & AUTOMATIZACIÓN */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.08] hover:border-white/[0.18] transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-zinc-900 border border-white/5 text-zinc-200">
                      <Network className="w-4 h-4 text-[#00D2FF]" />
                    </div>
                    <h4 className="text-base font-bold text-white">Integración & Automatización</h4>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500">Conectividad</span>
                </div>

                <div className="space-y-2.5">
                  {activeProjectData.dimensions.integrationAutomation.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <Zap className="w-4 h-4 text-[#00D2FF] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-5 border-t border-white/[0.06] text-xs font-mono text-zinc-500 flex items-center justify-between">
                <span>Canales: APIs REST & Webhooks</span>
                <span className="text-emerald-400">Sincronización Continua</span>
              </div>
            </div>
          </div>

          {/* Bottom Card Action Footer */}
          <div className="p-6 sm:p-8 bg-[#0a0a0f] border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-400">
              <ShieldCheck className="w-5 h-5 text-[#00D2FF] flex-shrink-0" />
              <span>
                Solución empresarial con código propietario y arquitectura diseñada para el crecimiento continuo.
              </span>
            </div>

            <Button
              href="#contacto"
              variant="primary"
              size="md"
              className="w-full sm:w-auto font-semibold shadow-[0_0_24px_-4px_rgba(0,102,255,0.5)] group whitespace-nowrap"
              id="active-project-cta"
            >
              <span>Conocer más</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
