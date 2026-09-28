"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Layers,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
} from "lucide-react";


type ActiveTab = "automation" | "ai" | "software" | "code";

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("automation");

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 overflow-hidden bg-[#050505] selection:bg-[#e50914] selection:text-white">
      {/* Background Tech Grid & Ambient Atmospheric Glow */}
      <div className="absolute inset-0 bg-tech-grid opacity-70 pointer-events-none" aria-hidden="true" />
      
      {/* Radial fade mask over grid so it dissolves gracefully into black edges */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_15%,transparent_20%,#050505_80%)] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Brand Red Glow Blobs (Corporate and restrained) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[360px] bg-red-600/[0.09] rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 left-1/4 w-[350px] h-[220px] bg-red-800/[0.05] rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-1/4 w-[380px] h-[240px] bg-zinc-600/[0.03] rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle top edge guide hairlines */}
      <div className="absolute top-28 left-0 right-0 h-px silver-line opacity-40" aria-hidden="true" />

      {/* Constellation & Floating Nodes Background (Subtle Particles & Grid Lines) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Subtle decorative tech nodes */}
        <div className="absolute top-36 left-[8%] hidden lg:block opacity-40">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#e50914]" />
            <span className="font-mono text-[10px] text-zinc-500 tracking-wider">NODE_GATEWAY_01</span>
          </div>
        </div>
        <div className="absolute top-44 right-[10%] hidden lg:block opacity-40">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
            <span className="font-mono text-[10px] text-zinc-500 tracking-wider">SECURE_TUNNEL_TLS</span>
          </div>
        </div>
        <div className="absolute top-[520px] left-[6%] hidden xl:block opacity-30">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            <span className="font-mono text-[10px] text-zinc-500 tracking-wider">AI_RUNTIME_CLUSTER</span>
          </div>
        </div>
        <div className="absolute top-[560px] right-[7%] hidden xl:block opacity-30">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
            <span className="font-mono text-[10px] text-zinc-500 tracking-wider">EVENT_STREAM_READY</span>
          </div>
        </div>

        {/* Delicate floating particle dots */}
        <div className="absolute top-1/4 left-[20%] w-1 h-1 rounded-full bg-red-500/40 animate-pulse" />
        <div className="absolute top-1/3 right-[22%] w-1 h-1 rounded-full bg-white/20 animate-pulse delay-700" />
        <div className="absolute top-2/3 left-[15%] w-1.5 h-1.5 rounded-full bg-red-500/30 animate-pulse delay-1000" />
        <div className="absolute top-3/5 right-[18%] w-1 h-1 rounded-full bg-white/30 animate-pulse delay-500" />
      </div>

      <Container className="relative z-10">
        {/* Main Text Content */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* EYEBROW: DANSUAR TECH */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0a0a0d]/90 border border-white/10 shadow-[0_0_24px_-4px_rgba(229,9,20,0.3)] mb-8 backdrop-blur-md transition-all hover:border-red-500/40 group cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e50914] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e50914] shadow-[0_0_10px_#ff2b36]" />
            </span>
            <span className="font-mono text-xs font-semibold tracking-[0.22em] text-zinc-200 uppercase">
              DANSUAR TECH
            </span>
            <span className="h-3 w-px bg-zinc-800 mx-0.5" />
            <span className="font-mono text-[11px] text-zinc-400 tracking-wider flex items-center gap-1 group-hover:text-zinc-300 transition-colors">
              INGENIERÍA & IA
            </span>
          </div>

          {/* TÍTULO PRINCIPAL */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.14] mb-6">
            Transformamos ideas y procesos en{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span className="bg-gradient-to-r from-[#ff3844] via-[#e50914] to-[#ff2b36] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(229,9,20,0.5)]">
                soluciones digitales.
              </span>
              {/* Refined high-tech bottom underline */}
              <span 
                className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#ff2b36] to-transparent rounded-full opacity-90"
                aria-hidden="true" 
              />
            </span>
          </h1>

          {/* SUBTÍTULO */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-300/90 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            Desarrollamos soluciones de software, inteligencia artificial y automatización para ayudar a las empresas a optimizar sus procesos y crecer.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-5">
            {/* CTA PRINCIPAL: Hablar con DANSUAR TECH */}
            <Button
              href="#contacto"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto font-semibold shadow-[0_0_30px_-5px_rgba(229,9,20,0.55)] hover:shadow-[0_0_40px_0px_rgba(255,43,54,0.75)] group"
              id="hero-talk-cta"
            >
              <span>Hablar con DANSUAR TECH</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </Button>

            {/* CTA SECUNDARIO: Conocer nuestros servicios */}
            <Button
              href="#servicios"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto border-white/10 hover:border-zinc-500/80 bg-zinc-900/80 text-zinc-200 hover:text-white backdrop-blur-sm"
              id="hero-services-cta"
            >
              <span>Conocer nuestros servicios</span>
            </Button>
          </div>

          {/* FRASE DEBAJO DE LOS BOTONES: Software • Inteligencia Artificial • Automatización */}
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-zinc-400 mb-16 sm:mb-20 tracking-wide select-none">
            <span className="text-zinc-300 font-medium hover:text-white transition-colors">Software</span>
            <span className="text-[#e50914] font-bold text-sm sm:text-base">•</span>
            <span className="text-zinc-300 font-medium hover:text-white transition-colors">Inteligencia Artificial</span>
            <span className="text-[#e50914] font-bold text-sm sm:text-base">•</span>
            <span className="text-zinc-300 font-medium hover:text-white transition-colors">Automatización</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* COMPOSICIÓN TECNOLÓGICA PREMIUM: Software, IA, Automatización, Nodos, Code */}
        {/* ========================================================================= */}
        <div className="relative max-w-6xl mx-auto">
          {/* Subtle Ambient Red Underglow beneath the central frame */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[70%] bg-red-600/[0.08] rounded-3xl blur-[100px] pointer-events-none"
            aria-hidden="true"
          />

          {/* SVG Connection Lines between floating modules and center on desktop */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-0 overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="lineGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(229, 9, 20, 0.4)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.08)" />
              </linearGradient>
              <linearGradient id="lineGradRight" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(229, 9, 20, 0.4)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.08)" />
              </linearGradient>
            </defs>

            {/* Path connecting top-left satellite to central console */}
            <path
              d="M 60 40 C 140 40, 180 120, 260 120"
              fill="none"
              stroke="url(#lineGradLeft)"
              strokeWidth="1.2"
              className="animate-dash-flow opacity-60"
            />
            {/* Path connecting top-right satellite to central console */}
            <path
              d="M 1080 40 C 1000 40, 960 120, 880 120"
              fill="none"
              stroke="url(#lineGradRight)"
              strokeWidth="1.2"
              className="animate-dash-flow opacity-60"
            />
          </svg>

          {/* Floating Satellites Grid - Above & Around the Central Console */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-6 relative z-10">
            {/* Satellite 1: Automatización de Flujos */}
            <div className="p-3.5 rounded-xl bg-[#09090c]/90 border border-white/[0.08] hover:border-red-500/40 transition-all duration-300 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.8)] group backdrop-blur-md">
              <div className="flex items-center justify-between mb-2.5">
                <div className="p-1.5 rounded-lg bg-zinc-900/90 border border-white/[0.06] text-zinc-300 group-hover:text-[#ff3844] transition-colors">
                  <Workflow className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-zinc-900 border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e50914] animate-pulse" />
                  <span className="text-[10px] font-mono text-zinc-400">Activo</span>
                </div>
              </div>
              <div className="text-xs font-semibold text-zinc-200 mb-1">Automatización</div>
              <div className="text-[11px] text-zinc-400 font-mono flex items-center gap-1">
                <span>Webhook</span>
                <span className="text-[#e50914]">→</span>
                <span>Procesamiento</span>
                <span className="text-[#e50914]">→</span>
                <span>Sincronización</span>
              </div>
            </div>

            {/* Satellite 2: Motor de Inteligencia Artificial */}
            <div className="p-3.5 rounded-xl bg-[#09090c]/90 border border-white/[0.08] hover:border-red-500/40 transition-all duration-300 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.8)] group backdrop-blur-md">
              <div className="flex items-center justify-between mb-2.5">
                <div className="p-1.5 rounded-lg bg-zinc-900/90 border border-white/[0.06] text-zinc-300 group-hover:text-[#ff3844] transition-colors">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-zinc-900 border border-white/5">
                  <Sparkles className="w-2.5 h-2.5 text-[#ff3844]" />
                  <span className="text-[10px] font-mono text-zinc-400">RAG & Modelos</span>
                </div>
              </div>
              <div className="text-xs font-semibold text-zinc-200 mb-1">Inteligencia Artificial</div>
              <div className="text-[11px] text-zinc-400 font-mono">
                Agentes autónomos & razonamiento contextual
              </div>
            </div>

            {/* Satellite 3: Plataformas & ERP a Medida */}
            <div className="p-3.5 rounded-xl bg-[#09090c]/90 border border-white/[0.08] hover:border-red-500/40 transition-all duration-300 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.8)] group backdrop-blur-md">
              <div className="flex items-center justify-between mb-2.5">
                <div className="p-1.5 rounded-lg bg-zinc-900/90 border border-white/[0.06] text-zinc-300 group-hover:text-[#ff3844] transition-colors">
                  <Database className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-zinc-900 border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                  <span className="text-[10px] font-mono text-zinc-400">Integración Siigo</span>
                </div>
              </div>
              <div className="text-xs font-semibold text-zinc-200 mb-1">Software & ERP</div>
              <div className="text-[11px] text-zinc-400 font-mono">
                Arquitectura transaccional y modular
              </div>
            </div>

            {/* Satellite 4: Arquitectura & Seguridad */}
            <div className="p-3.5 rounded-xl bg-[#09090c]/90 border border-white/[0.08] hover:border-red-500/40 transition-all duration-300 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.8)] group backdrop-blur-md">
              <div className="flex items-center justify-between mb-2.5">
                <div className="p-1.5 rounded-lg bg-zinc-900/90 border border-white/[0.06] text-zinc-300 group-hover:text-[#ff3844] transition-colors">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-zinc-900 border border-white/5">
                  <span className="text-[10px] font-mono text-zinc-400">TLS 1.3 / RBAC</span>
                </div>
              </div>
              <div className="text-xs font-semibold text-zinc-200 mb-1">Código Propietario</div>
              <div className="text-[11px] text-zinc-400 font-mono">
                Propiedad intelectual 100% de la empresa
              </div>
            </div>
          </div>

          {/* ===================================================================== */}
          {/* THE CENTRAL APPLICATION INTERFACE & INTERACTIVE ARCHITECTURE CONSOLE  */}
          {/* ===================================================================== */}
          <div className="rounded-2xl bg-[#08080b]/95 border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_-10px_rgba(229,9,20,0.18)] overflow-hidden backdrop-blur-xl relative z-10">
            {/* Top Bar / Window Frame */}
            <div className="px-4 py-3 bg-[#0c0c10] border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-3 select-none">
              {/* Window Controls & Title */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="h-3 w-px bg-zinc-800" />
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-zinc-400" />
                  <span className="font-mono text-xs text-zinc-300 font-semibold tracking-wide">
                    dansuar-core<span className="text-[#e50914]">://</span>system-console
                  </span>
                </div>
              </div>

              {/* Interactive Tabs */}
              <div className="flex items-center gap-1 bg-[#060608] p-1 rounded-xl border border-white/[0.06]">
                <button
                  type="button"
                  onClick={() => setActiveTab("automation")}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                    activeTab === "automation"
                      ? "bg-zinc-800 text-white font-medium shadow-sm border border-white/10 text-[#ff3844]"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                  id="tab-automation"
                >
                  <Workflow className="w-3 h-3 text-[#ff3844]" />
                  <span>Automatización</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("ai")}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                    activeTab === "ai"
                      ? "bg-zinc-800 text-white font-medium shadow-sm border border-white/10 text-[#ff3844]"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                  id="tab-ai"
                >
                  <Bot className="w-3 h-3 text-[#ff3844]" />
                  <span>Inteligencia Artificial</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("software")}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                    activeTab === "software"
                      ? "bg-zinc-800 text-white font-medium shadow-sm border border-white/10 text-[#ff3844]"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                  id="tab-software"
                >
                  <Database className="w-3 h-3 text-[#ff3844]" />
                  <span className="hidden sm:inline">Software & ERP</span>
                  <span className="sm:hidden">ERP</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("code")}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                    activeTab === "code"
                      ? "bg-zinc-800 text-white font-medium shadow-sm border border-white/10 text-[#ff3844]"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                  id="tab-code"
                >
                  <Code2 className="w-3 h-3 text-[#ff3844]" />
                  <span>Código</span>
                </button>
              </div>

              {/* Status Indicator */}
              <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-zinc-400">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-zinc-300">En Ejecución</span>
              </div>
            </div>

            {/* Console Body / Dynamic Views */}
            <div className="p-4 sm:p-6 lg:p-7 min-h-[340px] flex flex-col justify-center bg-[#070709]">
              
              {/* TAB 1: AUTOMATIZACIÓN (Flujo visual de nodos en tiempo real) */}
              {activeTab === "automation" && (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-zinc-200 uppercase tracking-wider">
                          Pipeline de Automatización de Procesos
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-red-950/60 border border-red-500/30 text-[#ff3844]">
                          Flujo Transaccional
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-1">
                        Captura de eventos, orquestación de reglas de negocio y ejecución automatizada sin fricción manual.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 bg-zinc-900/80 px-3 py-1.5 rounded-lg border border-white/5">
                      <span className="text-zinc-500">Protocolo:</span>
                      <span className="text-zinc-200">Event-Driven Architecture</span>
                    </div>
                  </div>

                  {/* Visual Node Diagram */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative">
                    {/* Node 1: Disparador */}
                    <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/[0.08] relative group hover:border-red-500/40 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Paso 01</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-[#ff3844]" />
                      </div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <Zap className="w-4 h-4 text-[#ff3844]" />
                        <h4 className="text-xs font-bold text-white">Disparador de Evento</h4>
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-snug">
                        Webhook transaccional o solicitud de nuevo pedido entrante.
                      </p>
                      <div className="mt-3 pt-2 border-t border-white/5 text-[10px] font-mono text-zinc-500">
                        Entrada: <span className="text-zinc-300">JSON Payload</span>
                      </div>
                    </div>

                    {/* Node 2: Validación y Reglas */}
                    <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/[0.08] relative group hover:border-red-500/40 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Paso 02</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
                      </div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <Cpu className="w-4 h-4 text-zinc-200" />
                        <h4 className="text-xs font-bold text-white">Validación de Datos</h4>
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-snug">
                        Normalización de campos, verificación fiscal y reglas comerciales.
                      </p>
                      <div className="mt-3 pt-2 border-t border-white/5 text-[10px] font-mono text-zinc-500">
                        Estado: <span className="text-emerald-400">Esquema Validado</span>
                      </div>
                    </div>

                    {/* Node 3: Enriquecimiento con IA */}
                    <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/[0.08] relative group hover:border-red-500/40 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Paso 03</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-[#ff3844]" />
                      </div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <Bot className="w-4 h-4 text-[#ff3844]" />
                        <h4 className="text-xs font-bold text-white">Análisis con IA</h4>
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-snug">
                        Extracción inteligente de parámetros y categorización automática.
                      </p>
                      <div className="mt-3 pt-2 border-t border-white/5 text-[10px] font-mono text-zinc-500">
                        Contexto: <span className="text-zinc-300">Embeddings RAG</span>
                      </div>
                    </div>

                    {/* Node 4: Sincronización Final */}
                    <div className="p-4 rounded-xl bg-zinc-950/80 border border-red-500/20 bg-gradient-to-b from-red-950/20 to-zinc-950/80 relative group hover:border-red-500/40 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-[#ff3844] uppercase tracking-widest">Paso 04</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <Database className="w-4 h-4 text-[#ff3844]" />
                        <h4 className="text-xs font-bold text-white">Sincronización ERP</h4>
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-snug">
                        Creación en Siigo Cloud API y registro en base de datos corporativa.
                      </p>
                      <div className="mt-3 pt-2 border-t border-white/5 text-[10px] font-mono text-zinc-500">
                        Destino: <span className="text-zinc-300">Siigo ERP + Postgres</span>
                      </div>
                    </div>
                  </div>

                  {/* Flow Telemetry Ribbon */}
                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                    <div className="flex items-center gap-3">
                      <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
                      <span className="text-zinc-400">Canal Transaccional:</span>
                      <span className="text-zinc-200">Sincronización Bidireccional Activa</span>
                    </div>
                    <div className="flex items-center gap-4 text-zinc-500 text-[11px]">
                      <span>Reintentos automáticos: Habilitados</span>
                      <span>•</span>
                      <span>Auditoría: Registro Inmutable</span>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: INTELIGENCIA ARTIFICIAL (Agentes & Razonamiento Contextual) */}
              {activeTab === "ai" && (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-zinc-200 uppercase tracking-wider">
                          Agentes de IA & Modelos Operativos
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-red-950/60 border border-red-500/30 text-[#ff3844]">
                          Inferencia Corporativa
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-1">
                        Sistemas cognitivos entrenados con las reglas, políticas y bases de conocimiento específicas de tu empresa.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 bg-zinc-900/80 px-3 py-1.5 rounded-lg border border-white/5">
                      <span className="text-zinc-500">Motor:</span>
                      <span className="text-zinc-200">RAG Especializado + Tool Use</span>
                    </div>
                  </div>

                  {/* AI Architecture Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                    {/* Capability 1 */}
                    <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/[0.08]">
                      <div className="p-2 w-fit rounded-lg bg-red-950/40 border border-red-500/20 text-[#ff3844] mb-3">
                        <Bot className="w-4 h-4" />
                      </div>
                      <h4 className="text-xs font-bold text-white mb-1">Agentes de Soporte & Operaciones</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                        Resolución de consultas complejas y ejecución de comandos sobre sistemas internos mediante lenguaje natural.
                      </p>
                      <div className="text-[10px] font-mono text-zinc-500">
                        Capacidad: <span className="text-zinc-300">Ejecución de APIs & Workflows</span>
                      </div>
                    </div>

                    {/* Capability 2 */}
                    <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/[0.08]">
                      <div className="p-2 w-fit rounded-lg bg-zinc-900 border border-white/10 text-zinc-300 mb-3">
                        <Sparkles className="w-4 h-4 text-[#ff3844]" />
                      </div>
                      <h4 className="text-xs font-bold text-white mb-1">Extracción de Documentos</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                        Procesamiento de facturas, órdenes de compra y contratos en PDF estructurados directamente a la base de datos.
                      </p>
                      <div className="text-[10px] font-mono text-zinc-500">
                        Entrada: <span className="text-zinc-300">Formatos no estructurados</span>
                      </div>
                    </div>

                    {/* Capability 3 */}
                    <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/[0.08]">
                      <div className="p-2 w-fit rounded-lg bg-zinc-900 border border-white/10 text-zinc-300 mb-3">
                        <Layers className="w-4 h-4 text-zinc-300" />
                      </div>
                      <h4 className="text-xs font-bold text-white mb-1">Bases de Conocimiento RAG</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                        Indexación vectorial segura sobre datos privados garantizando respuestas verídicas sin alucinaciones.
                      </p>
                      <div className="text-[10px] font-mono text-zinc-500">
                        Almacenamiento: <span className="text-zinc-300">Base Vectorial Dedicada</span>
                      </div>
                    </div>
                  </div>

                  {/* AI Status Ribbon */}
                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.06] flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-400 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>Privacidad de Datos: Modelos con aislamiento estricto y cero entrenamiento público</span>
                    </span>
                    <span className="text-zinc-500 hidden sm:inline">Arquitectura Enterprise-Grade</span>
                  </div>
                </div>
              )}

              {/* TAB 3: SOFTWARE & ERP (Plataformas Empresariales) */}
              {activeTab === "software" && (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-zinc-200 uppercase tracking-wider">
                          Arquitectura de Software & ERP
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-red-950/60 border border-red-500/30 text-[#ff3844]">
                          Módulos Integrados
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-1">
                        Sistemas centrales construidos con estándares de alta concurrencia, resiliencia y diseño a la medida.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 bg-zinc-900/80 px-3 py-1.5 rounded-lg border border-white/5">
                      <span className="text-zinc-500">Core:</span>
                      <span className="text-zinc-200">Microservicios & API Gateway</span>
                    </div>
                  </div>

                  {/* Modular Dashboard View */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                    <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/[0.08]">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xs font-bold text-white">Módulo de Facturación & Siigo</h4>
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">Sincronizado</span>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                        Emisión automática de comprobantes electrónicos, cálculo de impuestos e inventario sincronizado.
                      </p>
                      <div className="text-[10px] font-mono text-zinc-500 space-y-1">
                        <div>Integración: <span className="text-zinc-300">Siigo Cloud REST API</span></div>
                        <div>Comprobantes: <span className="text-zinc-300">Facturas, Notas, Pagos</span></div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/[0.08]">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xs font-bold text-white">Gestión de Inventario & Compras</h4>
                        <span className="text-[10px] font-mono text-zinc-300 bg-zinc-900 px-2 py-0.5 rounded border border-white/10">Tiempo Real</span>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                        Trazabilidad completa de stock en múltiples bodegas, alertas de reposición y órdenes de compra.
                      </p>
                      <div className="text-[10px] font-mono text-zinc-500 space-y-1">
                        <div>Bodegas: <span className="text-zinc-300">Multi-ubicación centralizada</span></div>
                        <div>Trazabilidad: <span className="text-zinc-300">Lotes y Kardex continuo</span></div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/[0.08]">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xs font-bold text-white">Panel de Control & Reportes</h4>
                        <span className="text-[10px] font-mono text-[#ff3844] bg-red-950/40 px-2 py-0.5 rounded border border-red-500/20">Operativo</span>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                        Visualización clara del flujo de operaciones, estado de entregas y consolidación contable sin demora.
                      </p>
                      <div className="text-[10px] font-mono text-zinc-500 space-y-1">
                        <div>Filtros: <span className="text-zinc-300">Periodos, Sedes, Clientes</span></div>
                        <div>Exportación: <span className="text-zinc-300">Formatos estándar y API</span></div>
                      </div>
                    </div>
                  </div>

                  {/* Architecture Badges */}
                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <span className="text-zinc-200">Componentes de Infraestructura:</span>
                      <span className="text-zinc-400">PostgreSQL • Next.js • FastAPI • Redis • Docker</span>
                    </div>
                    <span className="text-zinc-500 text-[11px]">Alta disponibilidad & Respaldos continuos</span>
                  </div>
                </div>
              )}

              {/* TAB 4: CÓDIGO ABSTRACTO & APIS (Sin métricas inventadas, arquitectura limpia) */}
              {activeTab === "code" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-zinc-400">service-handler.ts</span>
                      <span className="text-[10px] font-mono text-zinc-500">{"// Orquestador de Servicios Dansuar"}</span>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500">TypeScript 5.0 • Strict Mode</span>
                  </div>

                  {/* Syntax Highlighted Abstract Code */}
                  <div className="p-4 rounded-xl bg-black/70 border border-white/[0.06] font-mono text-xs overflow-x-auto leading-relaxed text-zinc-300">
                    <div className="text-zinc-500">{"// 1. Definición de interfaz corporativa y conexión con Siigo ERP"}</div>
                    <div>
                      <span className="text-purple-400">interface</span> <span className="text-yellow-300">EnterpriseWorkflow</span> {"{"}
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-300">transaccionId</span>: <span className="text-emerald-400">string</span>;
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-300">modulo</span>: <span className="text-emerald-400">&quot;ERP_SIIGO&quot;</span> | <span className="text-emerald-400">&quot;AI_AGENT&quot;</span> | <span className="text-emerald-400">&quot;AUTOMATION&quot;</span>;
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-300">datosOperativos</span>: <span className="text-yellow-300">Record</span>&lt;<span className="text-emerald-400">string</span>, <span className="text-emerald-400">unknown</span>&gt;;
                    </div>
                    <div>{"}"}</div>
                    <br />
                    <div className="text-zinc-500">{"// 2. Ejecución automatizada con validación y auditoría"}</div>
                    <div>
                      <span className="text-purple-400">export async function</span> <span className="text-blue-400">ejecutarProceso</span>(
                      <span className="text-orange-300">solicitud</span>: <span className="text-yellow-300">EnterpriseWorkflow</span>
                      ) {"{"}
                    </div>
                    <div className="pl-4">
                      <span className="text-zinc-500">{"// Validación de reglas y contexto mediante IA"}</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">const</span> <span className="text-zinc-100">contexto</span> = <span className="text-purple-400">await</span> <span className="text-yellow-300">DansuarAI</span>.<span className="text-blue-300">analizarEntidad</span>(<span className="text-orange-300">solicitud</span>);
                    </div>
                    <br />
                    <div className="pl-4">
                      <span className="text-zinc-500">{"// Sincronización atómica con sistemas empresariales"}</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">return await</span> <span className="text-yellow-300">SiigoAdapter</span>.<span className="text-blue-300">sincronizarComprobante</span>({"{"}
                    </div>
                    <div className="pl-8">
                      <span className="text-blue-300">entidad</span>: <span className="text-zinc-100">contexto</span>.<span className="text-blue-300">resultado</span>,
                    </div>
                    <div className="pl-8">
                      <span className="text-blue-300">auditoria</span>: <span className="text-red-400">true</span>,
                    </div>
                    <div className="pl-4">{"});"}</div>
                    <div>{"}"}</div>
                  </div>


                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-1">
                    <span>Código modular, desacoplado y sin dependencias propietarias opacas.</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Tipado Seguro
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Bar: System Architecture Summary */}
            <div className="px-4 py-2.5 bg-[#09090c] border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="text-[#ff3844] font-bold">●</span>
                <span className="text-zinc-300">DANSUAR TECH CORE</span>
                <span className="text-zinc-600">|</span>
                <span className="text-zinc-400">Software a Medida • Inteligencia Artificial • Automatización</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-zinc-500">Ambiente:</span>
                <span className="text-zinc-300">Producción Corporativa</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
