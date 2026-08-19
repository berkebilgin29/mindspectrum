import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2f5f66, #21484e)",
          borderRadius: 36,
          fontFamily: "Georgia, serif",
          fontSize: 90,
          fontWeight: 700,
          color: "#f7f6f2",
          letterSpacing: "-0.04em",
        }}
      >
        M
      </div>
    ),
    { ...size },
  );
}
