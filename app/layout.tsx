import type { Metadata, Viewport } from "next";
import { Archivo, Fraunces } from "next/font/google";
import type { ReactNode } from "react";
import { Analytics } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/site";
import "./globals.css";

// The display system is built on weight 900 and tight tracking; Arial has no
// 900 face, so the intended cut only renders with a real variable grotesque.
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "800", "900"],
  display: "swap",
  variable: "--font-display",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `AutomatedEmpires — ${site.headline}`,
    template: "%s | AutomatedEmpires",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: "AutomatedEmpires" }],
  creator: "AutomatedEmpires",
  publisher: "AutomatedEmpires",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: `AutomatedEmpires — ${site.headline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `AutomatedEmpires — ${site.headline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f2efe6",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        email: site.email,
        description: site.description,
        logo: `${site.url}/apple-icon.png`,
        founder: {
          "@type": "Person",
          name: "Jackson Cole",
          url: `${site.url}/founder`,
        },
        sameAs: ["https://github.com/AutomatedEmpires"],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        name: site.name,
        url: site.url,
        publisher: { "@id": `${site.url}/#organization` },
      },
    ],
  };

  return (
    <html lang="en" className={`${archivo.variable} ${fraunces.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <Footer />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
