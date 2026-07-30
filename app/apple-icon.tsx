import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0b",
          color: "#f4f1e8",
          fontSize: 72,
          fontWeight: 700,
          borderRadius: 36,
        }}
      >
        <span>A</span>
        <span style={{ color: "#d8ff57" }}>/</span>
        <span>E</span>
      </div>
    ),
    size,
  );
}
