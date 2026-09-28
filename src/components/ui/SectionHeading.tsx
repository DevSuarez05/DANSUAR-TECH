import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: "red" | "silver" | "emerald" | "zinc" | "cyan" | "blue";
  title: string;
  highlightedText?: string;
  highlightVariant?: "red" | "silver";
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  badgeVariant = "red",
  title,
  highlightedText,
  highlightVariant = "red",
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  const highlightStyles = {
    red: "text-[#e50914] drop-shadow-[0_0_20px_rgba(229,9,20,0.3)]",
    silver: "bg-gradient-to-r from-white via-zinc-300 to-zinc-400 bg-clip-text text-transparent",
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        isCenter ? "items-center text-center max-w-3xl mx-auto" : "items-start text-left max-w-2xl",
        className
      )}
    >
      {badge && (
        <Badge variant={badgeVariant} dot size="sm" className="mb-1">
          {badge}
        </Badge>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]">
        {title}{" "}
        {highlightedText && (
          <span className={highlightStyles[highlightVariant]}>
            {highlightedText}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed mt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
}
