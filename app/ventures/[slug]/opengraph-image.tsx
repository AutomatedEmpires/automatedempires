import { ImageResponse } from "next/og";
import { getVenture, ventures } from "@/lib/ventures";

export const alt = "AutomatedEmpires venture";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export function generateStaticParams() {
  return ventures.map((venture) => ({ slug: venture.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const venture = getVenture(slug);
  const ink = venture?.palette.ink ?? "#0a0a0b";
  const accent = venture?.palette.accent ?? "#d8ff57";
  const soft = venture?.palette.soft ?? "#f4f1e8";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: ink,
          color: soft,
          padding: 72,
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
          <span
            style={{
              color: accent,
              textTransform: "uppercase",
              letterSpacing: 2,
              fontSize: 24,
            }}
          >
            {venture?.stage ?? "Portfolio"}
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ fontSize: 30, color: accent, textTransform: "uppercase", letterSpacing: 3 }}>
            {venture?.category ?? "Venture portfolio"}
          </div>
          <div style={{ fontSize: 88, lineHeight: 1.02, maxWidth: 1000 }}>
            {venture?.name ?? "AutomatedEmpires"}
          </div>
          <div style={{ fontSize: 34, color: soft, opacity: 0.85, maxWidth: 940 }}>
            {venture?.tagline ?? "Companies for the real world."}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
