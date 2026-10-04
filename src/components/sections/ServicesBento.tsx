"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { servicesData, ServiceItem } from "@/config/services";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  Compass,
  Layers,
  Network,
  Sparkles,
  Workflow,
} from "lucide-react";

export function ServicesBento() {
  const iconMap: Record<ServiceItem["iconName"], React.ReactNode> = {
    Bot: <Bot className="w-6 h-6" />,
    Workflow: <Workflow className="w-6 h-6" />,
    Code2: <Code2 className="w-6 h-6" />,
    Layers: <Layers className="w-6 h-6" />,
    Network: <Network className="w-6 h-6" />,
    Compass: <Compass className="w-6 h-6" />,
  };

  return (
    <section className="py-28 sm:py-36 bg-[#050505] relative border-t border-white/[0.06] overflow-hidden" id="servicios">
      {/* Ambient background lighting */}
      <div
        className="absolute top-1/4 right-1/4 w-[500px] h-[300px] bg-blue-600/[0.06] rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-[450px] h-[260px] bg-cyan-600/[0.04] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative tech background grid */}
      <div className="absolute inset-0 bg-tech-dots opacity-35 pointer-events-none" aria-hidden="true" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900/90 border border-white/10 shadow-sm mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF] animate-pulse" />
            <span className="font-mono text-xs text-zinc-300 font-medium tracking-wider uppercase">
              Capacidades & Servicios
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.16] mb-5">
            Soluciones diseñadas para{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#00D2FF] via-[#0066FF] to-[#38BDF8] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,102,255,0.35)]">
                resolver problemas reales.
              </span>
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            Combinamos software, inteligencia artificial y automatización para construir soluciones adaptadas a las necesidades de cada empresa.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="relative rounded-2xl bg-[#09090c]/90 border border-white/[0.08] p-6 sm:p-7 flex flex-col justify-between overflow-hidden group hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.85),0_0_30px_-10px_rgba(0,102,255,0.25)] backdrop-blur-md"
            >
              {/* Top edge subtle reactive light */}
              <div 
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00D2FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                aria-hidden="true" 
              />

              {/* Hover ambient corner glow */}
              <div 
                className="absolute -top-16 -right-16 w-36 h-36 bg-blue-600/[0.04] rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-600/[0.14] transition-all duration-500" 
                aria-hidden="true" 
              />

              <div>
                {/* Card Header: Icon & Number Badge */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-white/10 text-zinc-200 group-hover:text-[#00D2FF] group-hover:border-cyan-500/40 group-hover:scale-105 group-hover:shadow-[0_0_20px_-3px_rgba(0,102,255,0.4)] transition-all duration-300">
                    {iconMap[service.iconName]}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-zinc-900 border border-white/5 text-[11px] font-mono text-zinc-400 group-hover:border-white/10 group-hover:text-zinc-300 transition-colors">
                      {service.tag}
                    </span>
                    <span className="font-mono text-xs font-bold text-zinc-500 group-hover:text-[#00D2FF] transition-colors">
                      {service.number}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-zinc-100 transition-colors mb-2.5">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-4 border-t border-white/[0.06]">
                  {service.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-300 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400/90 group-hover:text-[#00D2FF] transition-colors flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Microinteraction */}
              <div className="pt-5 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-zinc-200 transition-colors">
                <span className="text-zinc-500 group-hover:text-zinc-300 transition-colors">
                  Arquitectura Dansuar
                </span>
                <div className="flex items-center gap-1.5 text-zinc-400 group-hover:text-[#00D2FF] transition-colors">
                  <span>Consultar</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section End CTA Banner */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-[#0d0d12] to-[#07070a] border border-white/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9),0_0_40px_-15px_rgba(0,102,255,0.22)] text-center relative overflow-hidden">
          {/* Subtle Ambient Blue Light in Banner */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[160px] bg-blue-600/[0.09] rounded-full blur-[110px] pointer-events-none"
            aria-hidden="true" 
          />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-400 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>Acompañamiento Técnico de Extremo a Extremo</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              ¿Listo para modernizar las operaciones de tu empresa?
            </h3>

            <p className="text-sm sm:text-base text-zinc-400 mb-8 leading-relaxed">
              Analizamos los procesos específicos de tu organización y diseñamos una solución tecnológica a la medida que genere resultados tangibles.
            </p>

            <Button
              href="#contacto"
              variant="primary"
              size="lg"
              className="font-semibold shadow-[0_0_30px_-5px_rgba(0,102,255,0.6)] hover:shadow-[0_0_40px_0px_rgba(0,210,255,0.8)] group text-sm sm:text-base px-8 py-3.5"
              id="services-final-cta"
            >
              <span>Cuéntanos qué necesitas construir</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>

            <div className="flex items-center justify-center gap-3 text-xs font-mono text-zinc-500 mt-4">
              <span>Diagnóstico inicial sin costo</span>
              <span>•</span>
              <span>Diálogo directo con ingenieros</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// Named alias so any component importing ServicesSection works directly
export const ServicesSection = ServicesBento;
