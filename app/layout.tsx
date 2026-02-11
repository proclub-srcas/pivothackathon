import type { Metadata } from "next";
import "./globals.css";
import GlassNavBar from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ViewTransitions } from 'next-view-transitions'
import SmoothScroll from "@/components/SmoothScroll";
import InteractiveBackground from "@/components/InteractiveBackground";
import ScrollToTop from "@/components/ScrollToTop";



export const metadata: Metadata = {
  metadataBase: new URL('https://pivothackathon.web.app'),
  title: {
    default: "PIVOT Hackathon 2026 | SRCAS x L&T | i2i - Idea to Impact",
    template: "%s | PIVOT Hackathon SRCAS"
  },
  description: "PIVOT Hackathon 2026 by SRCAS Programming Club in partnership with L&T Product Development Centre. Join 12 hours of intensive coding, innovation, and real-world problem solving. Register now for i2i (Idea to Impact).",
  icons: {
    icon: '/favicon.ico',
  },
  keywords: [
    "pivot hackathon srcas",
    "PIVOT Hackathon",
    "SRCAS Hackathon",
    "programming club hackathon",
    "L&T hackathon",
    "Larsen and Toubro hackathon",
    "Coimbatore hackathon",
    "Sri Ramakrishna College hackathon",
    "i2i hackathon",
    "idea to impact",
    "engineering hackathon",
    "coding competition",
    "tech event Coimbatore",
    "student hackathon 2026",
    "Tamil Nadu hackathon"
  ],
  openGraph: {
    title: "PIVOT Hackathon 2026 | SRCAS x L&T | i2i - Idea to Impact",
    description: "Join PIVOT Hackathon 2026 - 12 hours of intensive coding, innovation, and real-world problem solving at SRCAS, Coimbatore in partnership with L&T Product Development Centre.",
    url: 'https://pivothackathon.web.app',
    siteName: 'PIVOT Hackathon 2026 - SRCAS',
    images: [
      {
        url: '/hackbyte_home_page.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap" />
        </head>
        <body
          className={`antialiased overflow-x-hidden bg-white`}
        >
          <InteractiveBackground />
          <SmoothScroll>
            <GlassNavBar />
            {children}
            <ScrollToTop />
            <Footer />
          </SmoothScroll>
        </body>
      </html>
    </ViewTransitions>
  );
}
