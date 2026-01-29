import type { Metadata } from "next";
import { Geist, Geist_Mono, Kanit, Poppins } from "next/font/google";
import "./globals.css";
import GlassNavBar from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ViewTransitions } from 'next-view-transitions'
import SmoothScroll from "@/components/SmoothScroll";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kanit = Kanit({
  weight: ["400", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://srcas-lnt-hackathon.com'),
  title: {
    default: "SRCAS × L&T Hackathon 2026",
    template: "%s | SRCAS × L&T Hackathon"
  },
  description: "SRCAS × L&T Technology Services Hackathon 2026. Join us for 36 hours of coding, innovation, and fun. February 2026.",
  icons: {
    icon: '/favicon.ico',
  },
  keywords: ["Hackathon", "SRCAS", "L&T Technology Services", "Coding", "Coimbatore", "Tech Event"],
  openGraph: {
    title: "SRCAS × L&T Hackathon 2026",
    description: "Join us for 36 hours of coding, innovation, and fun at SRCAS, Coimbatore.",
    url: 'https://srcas-lnt-hackathon.com',
    siteName: 'SRCAS × L&T Hackathon',
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
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${kanit.variable} ${poppins.className} antialiased overflow-x-hidden bg-white`}
        >
          <SmoothScroll>
            <GlassNavBar />
            {children}
            <Footer />
          </SmoothScroll>
        </body>
      </html>
    </ViewTransitions>
  );
}
