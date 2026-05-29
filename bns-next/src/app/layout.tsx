import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const syne = Syne({ subsets: ["latin"], weight: ["700", "800"], variable: "--serif" });
const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--sans" });

export const metadata: Metadata = {
  title: "BNS Prestige — Location Sportives · Bruxelles",
  description: "Location de voitures sportives hautes performances à Bruxelles. Audi RS3, Golf 8R, A45s AMG, BMW M135i.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${syne.variable} ${outfit.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
