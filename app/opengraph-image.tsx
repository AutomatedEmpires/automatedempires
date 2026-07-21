import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AutomatedEmpires";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0b",
          color: "#f4f1e8",
          padding: 72,
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 28,
          }}
        >
          <span>A/E · AutomatedEmpires</span>
          <span style={{ color: "#d8ff57" }}>Venture company</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ fontSize: 82, lineHeight: 1.02, maxWidth: 920 }}>
            Companies for the real world.
          </div>
          <div style={{ display: "flex", gap: 18, fontSize: 30, color: "#a7a49b" }}>
            <span>Products</span>
            <span>Marketplaces</span>
            <span>Operations</span>
            <span>Civic systems</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
