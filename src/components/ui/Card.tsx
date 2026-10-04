import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "glass" | "solid" | "glow" | "metallic";
  interactive?: boolean;
}

export function Card({
  children,
  variant = "glass",
  interactive = false,
  className,
  ...props
}: CardProps) {
  const variantStyles = {
    glass: "glass-panel",
    solid: "bg-[#0d0d10] border border-zinc-800/80",
    glow: "glass-panel border-cyan-500/30 shadow-[0_0_35px_-10px_rgba(0,102,255,0.22)]",
    metallic: "metallic-border bg-[#0d0d11]/80 backdrop-blur-md",
  };

  return (
    <div
      className={cn(
        "rounded-2xl p-6 sm:p-8 relative overflow-hidden",
        variantStyles[variant],
        interactive && "glass-panel-hover",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
