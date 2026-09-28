import { ImageResponse } from "next/og";

export const alt = "DANSUAR TECH | Inteligencia Artificial, Automatización y Software";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#050505",
          padding: "64px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient background glow */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "9999px",
            background: "radial-gradient(circle, rgba(229,9,20,0.3) 0%, rgba(5,5,5,0) 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Top Brand Bar */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "#0c0c10",
              border: "1px solid rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 25px rgba(229,9,20,0.4)",
            }}
          >
            <span style={{ fontSize: "28px", fontWeight: 900, color: "#ffffff" }}>
              <span style={{ color: "#e50914" }}>&gt;</span>D
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "26px", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.5px" }}>
              DANSUAR<span style={{ color: "#e50914" }}>.</span>TECH
            </span>
            <span
              style={{
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "3px",
                color: "#a1a1aa",
                fontFamily: "monospace",
              }}
            >
              Enterprise Software & AI
            </span>
          </div>
        </div>

        {/* Central Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "980px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "9999px",
              background: "rgba(229,9,20,0.12)",
              border: "1px solid rgba(229,9,20,0.3)",
            }}
          >
            <span style={{ width: "8px", height: "8px", borderRadius: "9999px", background: "#e50914" }} />
            <span style={{ color: "#fca5a5", fontSize: "14px", fontFamily: "monospace", fontWeight: 600 }}>
              INGENIERIA DE SOFTWARE & IA CORPORATIVA
            </span>
          </div>

          <h1
            style={{
              fontSize: "58px",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.15,
              letterSpacing: "-1.5px",
              margin: 0,
            }}
          >
            Transformamos ideas y procesos en{" "}
            <span style={{ color: "#ff2b36" }}>soluciones tecnologicas.</span>
          </h1>

          <p style={{ fontSize: "24px", color: "#a1a1aa", lineHeight: 1.4, margin: 0 }}>
            Desarrollamos soluciones de software, inteligencia artificial y automatizacion para empresas.
          </p>
        </div>

        {/* Bottom Feature Badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "24px",
            width: "100%",
          }}
        >
          <span style={{ color: "#d4d4d8", fontSize: "16px", fontFamily: "monospace" }}>
            Sistemas ERP a Medida
          </span>
          <span style={{ color: "#e50914" }}>•</span>
          <span style={{ color: "#d4d4d8", fontSize: "16px", fontFamily: "monospace" }}>
            Automatizacion de Procesos
          </span>
          <span style={{ color: "#e50914" }}>•</span>
          <span style={{ color: "#d4d4d8", fontSize: "16px", fontFamily: "monospace" }}>
            Integraciones de APIs & Siigo
          </span>
        </div>

      </div>
    ),
    {
      ...size,
    }
  );
}
