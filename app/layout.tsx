import type { Metadata } from "next";
import "./globals.css";
import GlassNavBar from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ViewTransitions } from 'next-view-transitions'
import SmoothScroll from "@/components/SmoothScroll";
import InteractiveBackground from "@/components/InteractiveBackground";
import ScrollToTop from "@/components/ScrollToTop";



export const metadata: Metadata = {
  metadataBase: new URL('https://srcas-lnt-hackathon.com'),
  title: {
    default: "PIVOT Hackathon 2026 | i2i - Idea to Impact",
    template: "%s | PIVOT Hackathon"
  },
  description: "PIVOT Hackathon 2026 - i2i (Idea to Impact). Join us for 24 hours of coding, innovation, and fun. February 2026.",
  icons: {
    icon: '/favicon.ico',
  },
  keywords: ["Hackathon", "PIVOT", "i2i", "Idea to Impact", "SRCAS", "Larsen & Toubro Limited", "Coding", "Coimbatore", "Tech Event"],
  openGraph: {
    title: "PIVOT Hackathon 2026 | i2i - Idea to Impact",
    description: "Join us for 24 hours of coding, innovation, and fun at SRCAS, Coimbatore.",
    // url: 'https://srcas-lnt-hackathon.com',
    siteName: 'PIVOT Hackathon 2026',
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
