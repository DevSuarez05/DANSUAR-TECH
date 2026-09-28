import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "metallic";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  isExternal,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e50914] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer";

  const variantStyles = {
    primary:
      "bg-[#e50914] text-white font-semibold border border-red-500/60 shadow-[0_0_24px_-4px_rgba(229,9,20,0.5)] hover:bg-[#ff1f2d] hover:shadow-[0_0_32px_-2px_rgba(255,43,54,0.7)] active:scale-[0.98]",
    secondary:
      "bg-zinc-900/90 text-zinc-100 border border-zinc-800 hover:bg-zinc-800/90 hover:border-zinc-600 active:scale-[0.98]",
    outline:
      "border border-zinc-800 text-zinc-300 bg-transparent hover:bg-zinc-900/60 hover:border-red-500/40 hover:text-white active:scale-[0.98]",
    ghost:
      "text-zinc-400 hover:text-white hover:bg-zinc-900/60 active:scale-[0.98]",
    metallic:
      "bg-gradient-to-b from-zinc-800/90 to-zinc-900/90 text-zinc-100 border border-zinc-600/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] hover:border-zinc-400 active:scale-[0.98]",
  };

  const sizeStyles = {
    sm: "h-9 px-3.5 text-xs gap-1.5",
    md: "h-11 px-5 text-sm gap-2",
    lg: "h-12 px-7 text-base gap-2.5 font-medium",
  };

  const combinedClasses = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
