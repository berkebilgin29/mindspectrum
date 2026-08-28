import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "9spectrum — İki aşamalı psikolojik tarama";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const logoData = await readFile(join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt="9spectrum"
          width={560}
          height={132}
          style={{ objectFit: "contain" }}
        />
        <div
          style={{
            marginTop: 28,
            fontSize: 28,
            color: "#4a5564",
            textAlign: "center",
            maxWidth: 760,
          }}
        >
          İki aşamalı psikolojik tarama · 9 boyut
        </div>
        <div
          style={{
            marginTop: 14,
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
