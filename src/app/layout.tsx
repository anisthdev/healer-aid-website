import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Healer Aid Foundation - Empowering Communities Across West Bengal",
  description: "Healer Aid Foundation works to break the cycle of poverty through health, education, livelihood, and human rights initiatives across Darjeeling, Kolkata, Howrah, and 24 Parganas.",
  keywords: "NGO Kolkata, child nutrition, education support, TB elimination, women empowerment, West Bengal NGO, donate India",
  openGraph: {
    title: "Healer Aid Foundation",
    description: "Creating sustainable, community-driven change across West Bengal",
    url: "https://healeraid.in",
    siteName: "Healer Aid Foundation",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
