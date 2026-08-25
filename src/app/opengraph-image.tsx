import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MindSpectrum — Çift aşamalı adaptif tarama";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #d7dde4 0%, #f7f6f2 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "4px",
            fontSize: 72,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "#1c2430",
          }}
        >
          <span>Mind</span>
          <span style={{ color: "#2f5f66", fontStyle: "italic", fontWeight: 500 }}>
            Spectrum
          </span>
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 28,
            color: "#4a5564",
            textAlign: "center",
            maxWidth: 700,
          }}
        >
          Çift aşamalı adaptif tarama · 9 psikolojik boyut
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 20,
            color: "#6d7886",
          }}
        >
          Tanı koymaz · Örtüşen belirtileri ayırır · Cevaplar cihazınızda kalır
        </div>
      </div>
    ),
    { ...size },
  );
}
