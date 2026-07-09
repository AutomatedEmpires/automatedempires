import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// The AE monogram — gold on ink, matching the site's brand mark.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#101313",
          color: "#d2b46e",
          fontSize: 17,
          fontWeight: 800,
          letterSpacing: "-0.5px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        AE
      </div>
    ),
    size,
  );
}
