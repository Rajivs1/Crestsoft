import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090b",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://crestsoft.in"),
  title: { default: "CrestSoft — Technology Built to Move You Forward", template: "%s | CrestSoft" },
  description: "CrestSoft builds modern digital products for businesses ready to grow.",
  openGraph: {
    type: "website",
    siteName: "CrestSoft",
    title: "CrestSoft — Technology Built to Move You Forward",
    description: "We build modern digital products for businesses ready to grow.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
