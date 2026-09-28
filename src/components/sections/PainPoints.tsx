import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { painPointsData } from "@/config/painPoints";
import { AlertCircle, CheckCircle2, FileSpreadsheet, Cpu, Maximize2 } from "lucide-react";

export function PainPoints() {
  const iconMap: Record<string, React.ReactNode> = {
    FileSpreadsheet: <FileSpreadsheet className="w-5 h-5 text-red-400" />,
    Cpu: <Cpu className="w-5 h-5 text-zinc-300" />,
    Maximize2: <Maximize2 className="w-5 h-5 text-zinc-300" />,
  };

  return (
    <section className="py-24 bg-[#050505] relative border-t border-white/[0.07]" id="problemas-que-resolvemos">
      <Container>
        <SectionHeading
          badge="Diagnóstico Empresarial"
          badgeVariant="red"
          title="Resolvemos los cuellos de botella que"
          highlightedText="frenan el crecimiento corporativo"
          highlightVariant="red"
          subtitle="Las organizaciones modernas pierden cientos de horas en herramientas fragmentadas y procesos manuales. Transformamos estas fricciones en ventajas competitivas duraderas."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {painPointsData.map((item) => (
            <Card
              key={item.id}
              variant="glass"
              interactive
              className="flex flex-col justify-between h-full group border-white/[0.08] hover:border-white/[0.18]"
            >
              {/* Problem Part */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-white/10">
                    {iconMap[item.iconName]}
                  </div>
                  <span className="text-xs font-mono text-red-400 bg-red-950/40 border border-red-900/50 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 text-[#e50914]" /> Ineficiencia actual
                  </span>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-zinc-100 transition-colors">
                    {item.problemTitle}
                  </h3>
                  <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                    {item.problemDescription}
                  </p>
                </div>
              </div>

              {/* Transition Divider */}
              <div className="my-6 flex items-center gap-2 text-xs font-mono text-zinc-400">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-red-500/25 to-transparent" />
                <span className="uppercase tracking-widest text-[10px] text-red-400 font-semibold">Arquitectura DANSUAR</span>
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-red-500/25 to-transparent" />
              </div>

              {/* Solution Part */}
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-red-500/20 space-y-2">
                <div className="flex items-center gap-2 text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-[#e50914] flex-shrink-0" />
                  <h4 className="text-xs font-semibold tracking-wide uppercase font-mono text-zinc-200">
                    {item.solutionTitle}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed pl-6">
                  {item.solutionDescription}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
