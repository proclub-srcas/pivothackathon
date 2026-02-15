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
    default: "PIVOT Innovation Challenge2026 | SRCAS x L&T | i2i - Idea to Impact",
    template: "%s | PIVOT Innovation ChallengeSRCAS"
  },
  description: "PIVOT Innovation Challenge2026 by SRCAS Programming Club in partnership with L&T Product Development Centre. Join 12 hours of intensive coding, innovation, and real-world problem solving. Register now for i2i (Idea to Impact).",
  icons: {
    icon: '/PIVOT.png',
    apple: '/PIVOT.png',
  },
  verification: {
    google: "Qapgpbhb6qfWXY7t-nkErGJYidL8_7t7jxNKHYrxP9A",
  },
  keywords: [
    "PIVOT Innovation Challenge 2026",
    "SRCAS Hackathon",
    "L&T Hackathon",
    "Coimbatore Hackathon",
    "Programming Club SRCAS",
    "Idea to Impact",
    "i2i",
    "Hackathon 2026",
    "Student Innovation",
    "Tamil Nadu Tech Event",
    "Larsen and Toubro",
    "Sri Ramakrishna College of Arts and Science"
  ],
  openGraph: {

    title: "PIVOT Innovation Challenge2026 | SRCAS x L&T | i2i - Idea to Impact",
    description: "Join PIVOT Innovation Challenge2026 - 12 hours of intensive coding, innovation, and real-world problem solving at SRCAS, Coimbatore in partnership with L&T Product Development Centre",
    url: 'https://pivothackathon.web.app',
    siteName: 'PIVOT Innovation Challenge2026 - SRCAS',
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
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Event",
                "name": "PIVOT Innovation Challenge 2026",
                "startDate": "2026-02-27T08:30:00+05:30",
                "endDate": "2026-02-27T20:30:00+05:30",
                "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
                "eventStatus": "https://schema.org/EventScheduled",
                "location": {
                  "@type": "Place",
                  "name": "Sri Ramakrishna College of Arts and Science",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Nava India, Avinashi Rd",
                    "addressLocality": "Coimbatore",
                    "postalCode": "641006",
                    "addressRegion": "Tamil Nadu",
                    "addressCountry": "IN"
                  }
                },
                "image": [
                  "https://pivothackathon.web.app/PIVOT.png",
                  "https://pivothackathon.web.app/hackbyte_home_page.png"
                ],
                "description": "PIVOT Innovation Challenge 2026: A 12-hour intensive hackathon by SRCAS Programming Club & L&T Product Development Centre.",
                "performer": {
                  "@type": "Organization",
                  "name": "SRCAS Programming Club"
                },
                "organizer": {
                  "@type": "Organization",
                  "name": "Sri Ramakrishna College of Arts and Science",
                  "url": "https://srcas.ac.in"
                }
              })
            }}
          />
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
