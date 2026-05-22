import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroCanvas from "@/components/ui/HeroCanvas";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thrivel | Empowering Businesses with Smart SaaS Solutions",
  description: "Thrivel builds scalable SaaS products and provides cutting-edge software services to help businesses grow digitally.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`} suppressHydrationWarning data-scroll-behavior="smooth">
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
          <Navbar />
          <HeroCanvas />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
