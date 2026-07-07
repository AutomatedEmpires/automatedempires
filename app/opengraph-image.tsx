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
          background: "#101313",
          color: "#f4f0e7",
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
          <span>AutomatedEmpires</span>
          <span style={{ color: "#d2b46e" }}>Venture studio</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ fontSize: 82, lineHeight: 1.02, maxWidth: 920 }}>
            The world is full of systems that almost work.
          </div>
          <div style={{ display: "flex", gap: 18, fontSize: 30, color: "#abc0b8" }}>
            <span>Find fragmentation</span>
            <span>Understand failure</span>
            <span>Build the system</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
