import { motion } from "framer-motion";
import Image from "next/image"
import Link from "next/link"

const navLinks = [
  { href: "/#", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#problems", label: "Problem" },
  { href: "/#prizes", label: "Prizes" },
  { href: "/#timeline", label: "Schedule" },
  // { href: "#about", label: "Humans" },
  { href: "/#faq", label: "FAQs" },
  { href: "/#contact", label: "Contact" },
]


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const },
  },
};

export function Footer() {
  return (
    <footer className="relative w-full flex flex-col bg-gray-900">
      {/* Main Footer Content */}
      <div className="relative flex flex-col items-center py-16 px-6">
        {/* Heading 
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold italic text-white mb-2">
            PIVOT
          </h2>
          <p className="text-gray-400 text-xl italic">
            i2i - Idea to Impact
          </p>
        </div> 
        */}


        {/* PIVOT Logo */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-12 w-full">
          {/* PIVOT Logo */}
          <div className="w-full max-w-4xl p-6 rounded-2xl bg-white/80 backdrop-blur-md shadow-xl border border-gray-900 hover:border-[#005CAA]/100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-center">
              <Image
                src="/pivot-logo.png"
                alt="PIVOT"
                width={500}
                height={300}
                className="h-20 md:h-24 w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Logos */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-12">
          {/* SRCAS Logo */}
          <div className="flex items-center">
            <Image
              src="/srcas-logo.png"
              alt="Sri Ramakrishna College of Arts and Science"
              width={300}
              height={100}
              className="h-20 md:h-24 w-auto object-contain"
            />
          </div>

          {/* Programming Club Logo */}
          <div className="flex items-center">
            <Image
              src="/programming-club-logo.png"
              alt="Programming Club"
              width={200}
              height={80}
              className="h-16 md:h-20 w-auto object-contain"
            />
          </div>

          {/* L&T Logo */}
          <div className="flex items-center">
            <Image
              src="/L_and_T_Technology_Services.png"
              alt="L&T Technology Services"
              width={200}
              height={80}
              className="h26 md:h-40 w-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Blue Bar with Navigation & Socials */}
      <div className="relative w-full bg-[#005CAA] py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Navigation Links */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-white font-medium">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-white/80 transition-colors text-sm md:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/proclub_srcas/"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full bg-gray-950 py-4 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-400 text-sm text-center">
            Crafted with ❤️ by <a href="https://udhayasankar.vercel.app/" target="_blank" className="text-white hover:text-gray-200 transition-colors">உதய UD</a>
          </p>
        </div>
        <p className="text-gray-400 text-sm absolute right-6 top-1/2 -translate-y-1/2">
          © 2025 SRCAS Programming Club, All rights reserved
        </p>
      </div>
    </footer>
  )
}
