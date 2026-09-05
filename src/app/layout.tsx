import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { CursorGlow } from "@/components/ui/CursorGlow";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
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
    <html lang="en" className={`${display.variable} ${body.variable} dark`} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <CursorGlow />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
