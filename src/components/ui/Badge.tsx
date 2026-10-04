import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "red" | "silver" | "emerald" | "zinc" | "cyan" | "blue";
  size?: "sm" | "md";
  dot?: boolean;
}

export function Badge({
  children,
  variant = "cyan",
  size = "md",
  dot = false,
  className,
  ...props
}: BadgeProps) {
  const variantStyles = {
    red: "bg-cyan-950/40 text-cyan-300 border-cyan-500/30",
    cyan: "bg-cyan-950/40 text-cyan-300 border-cyan-500/30",
    blue: "bg-blue-950/40 text-blue-300 border-blue-500/30",
    silver: "bg-zinc-900/80 text-zinc-300 border-zinc-700/60",
    zinc: "bg-zinc-900/90 text-zinc-400 border-zinc-800",
    emerald: "bg-emerald-950/40 text-emerald-300 border-emerald-800/40",
  };

  const dotStyles = {
    red: "bg-[#00D2FF] shadow-[0_0_8px_#00D2FF]",
    cyan: "bg-[#00D2FF] shadow-[0_0_8px_#00D2FF]",
    blue: "bg-[#0066FF] shadow-[0_0_8px_#0066FF]",
    silver: "bg-zinc-300 shadow-[0_0_8px_rgba(255,255,255,0.4)]",
    zinc: "bg-zinc-400",
    emerald: "bg-emerald-400 shadow-[0_0_8px_#34d399]",
  };

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-xs font-mono tracking-tight",
    md: "px-3.5 py-1 text-xs sm:text-sm font-medium",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border backdrop-blur-md transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn("h-1.5 w-1.5 rounded-full animate-pulse", dotStyles[variant])}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
