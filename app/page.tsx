"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Calendar,
  Download,
  ArrowRight,
} from "lucide-react";

// Import existing components
import ProblemSection from "@/components/problems/ProblemSection";
import Timeline from "@/components/sections/timeline";
import GuidelinesSection from "@/components/guidelines/guidelines";
import PrizesSection from "@/components/sections/PrizesSection";
import ContactSection from "@/components/sections/ContactSection";
import JumpingText from "@/components/JumpingText";
import { FaqList } from '@/components/faq/faq-list';

import DodgeHero from "@/components/DodgeHero"

import { Typography } from '@/components/Typography';
import Image from "next/image"


// ============================================
// ANIMATION VARIANTS
// ============================================
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// ============================================
// HERO SECTION
// ============================================
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#005CAA]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#005CAA]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#005CAA]/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#005CAA 1px, transparent 1px), linear-gradient(90deg, #005CAA 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#005CAA]/10 text-[#005CAA] rounded-full text-sm font-medium">
              <Calendar className="w-4 h-4" />
              February 2026
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 tracking-tight flex flex-wrap justify-center gap-x-4"
          >
            <JumpingText
              text="Innovating for"
              defaultColor="#111827"
              hoverColor="#005CAA"
            />
            <JumpingText
              text="Tomorrow"
              defaultColor="#005CAA"
              hoverColor="#003366"
            />
          </motion.h1>

          {/* PIVOT Logo */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-4">
            <div className="p-5 rounded-2xl bg-white/80 backdrop-blur-md shadow-lg border border-gray-100 hover:border-[#005CAA]/30 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center">
                <Image
                  src="/pivot-logo.png"
                  alt="PIVOT"
                  width={500}
                  height={300}
                  className="h-32 md:h-40 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Sub-headline */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto"
          >
            <span className=" text-5xl font-semibold text-[#005CAA]"></span>  <span className="text-5xl font-semibold text-gray-800"></span>
            <span className="text-lg mt-2 block">
              <span className="font-semibold text-[#005CAA]"> </span>
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0px 0px 0px rgba(0, 92, 170, 0)",
                  "0px 0px 20px rgba(0, 92, 170, 0.4)",
                  "0px 0px 0px rgba(0, 92, 170, 0)",
                ],
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="flex items-center gap-2 px-8 py-4 bg-[#005CAA] text-white font-semibold rounded-xl hover:bg-[#004a8c] transition-all duration-300 shadow-lg"
            >
              Register Now
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <button className="flex items-center gap-2 px-8 py-4 border-2 border-[#005CAA] text-[#005CAA] font-semibold rounded-xl hover:bg-[#005CAA]/5 transition-all duration-300">
              <Download className="w-5 h-5" />
              Guidelines for the Abstract
            </button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            variants={fadeInUp}
            className="mt-6 flex flex-wrap justify-center gap-12 text-center"
          >
            <div>
              <p className="text-4xl font-bold text-[#005CAA]">₹50K+</p>
              <p className="text-gray-500 mt-1">Prize Pool</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#005CAA]">24</p>
              <p className="text-gray-500 mt-1">Hours</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#005CAA]">4</p>
              <p className="text-gray-500 mt-1">Tracks</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }
        }
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-[#005CAA]/50" />
      </motion.div >
    </section >
  );
}

// ============================================
// ABOUT SECTION
// ============================================
function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="text-[#005CAA] font-semibold uppercase tracking-wider text-sm"
          >
            <JumpingText
              text="Who We Are and"
              defaultColor="#005CAA"
              hoverColor="#003366"
              jumpHeight={6}
            />
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-8"
          >
            <div className="max-w-7xl mx-auto relative z-10">
              {/* Section Title */}
              <div className="flex flex-col items-center justify-center mb-20 text-center space-y-4">
                <Typography.H2 className="font-wc-rough-trad text-black text-[clamp(3rem,5vw,5rem)] leading-none">
                  <JumpingText
                    text="What is "
                    defaultColor="#000000"
                    hoverColor="#005CAA"
                    jumpHeight={12}
                  />
                  <span className="font-wc-rough-trad text-[#005CAA] block md:inline">
                    <JumpingText
                      text="PIVOT Hackathon"
                      defaultColor="#005CAA"
                      hoverColor="#003366"
                      jumpHeight={14}
                    />
                  </span>
                </Typography.H2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-gray-700 to-black rounded-full mt-4" />
              </div>
            </div>
          </motion.h2>
          <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Sri Ramakrishna College of Arts and Science (SRCAS) is proud to partner with <span className="font-semibold text-[#005CAA]">L&T Technology Services</span> to
              host an industry-focused hackathon that bridges academia and innovation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              This 24-hour event brings together the brightest minds to solve real-world
              challenges across sustainability, healthcare, smart cities, and emerging
              technologies. Join us in shaping the future through collaboration, creativity,
              and cutting-edge technology.
            </p>
          </motion.div>

          {/* Partner logos placeholder */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12"
          >
            <div className="px-8 py-4 bg-white rounded-xl shadow-sm border border-gray-100 w-full md:w-auto">
              <p className="text-xl md:text-2xl font-bold text-gray-800">SRCAS</p>
            </div>
            <span className="text-gray-400 text-2xl rotate-90 md:rotate-0"> 🤝 </span>
            <div className="px-8 py-4 bg-white rounded-xl shadow-sm border border-gray-100 w-full md:w-auto">
              <p className="text-xl md:text-2xl font-bold text-[#005CAA]">L&T Technology Services</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


// ============================================
// FAQ SECTION
// ============================================
const faqs = [
  {
    question: "Who can participate in the hackathon?",
    answer:
      "The hackathon is open to all undergraduate and postgraduate students. Teams can have 2-4 members. At least one team member must be from a recognized institution.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "No, participation is completely free! We believe innovation should be accessible to everyone.",
  },
  {
    question: "What should I bring to the hackathon?",
    answer:
      "Bring your laptop, charger, any hardware you might need, and your creativity! We'll provide food, drinks, and a comfortable workspace.",
  },
  {
    question: "Can I start working on my project before the event?",
    answer:
      "No, all projects must be started from scratch during the hackathon. However, you can research and plan your ideas beforehand.",
  },
  {
    question: "How are the winners selected?",
    answer:
      "Projects are judged based on innovation, technical complexity, practical applicability, and presentation quality by a panel of industry experts from L&T Technology Services.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-transparent">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-[#005CAA] font-semibold uppercase tracking-wider text-sm">
              Questions?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#005CAA] transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "rotate-180" : ""
                      }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// FOOTER SECTION
// ============================================
// function FooterSection() {
//   return (
//     <footer className="bg-[#003366] text-white py-16">
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="grid md:grid-cols-3 gap-12 mb-12">
//           {/* Brand */}
//           <div>
//             <h3 className="text-2xl font-bold mb-4">SRCAS × L&T</h3>
//             <p className="text-white/70 leading-relaxed">
//               Fostering innovation through industry-academia collaboration.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-semibold mb-4 text-white/90">Quick Links</h4>
//             <ul className="space-y-3">
//               <li>
//                 <a
//                   href="#about"
//                   className="text-white/70 hover:text-white transition-colors"
//                 >
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#tracks"
//                   className="text-white/70 hover:text-white transition-colors"
//                 >
//                   Problem Statements
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#timeline"
//                   className="text-white/70 hover:text-white transition-colors"
//                 >
//                   Timeline
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#faq"
//                   className="text-white/70 hover:text-white transition-colors"
//                 >
//                   FAQ
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="font-semibold mb-4 text-white/90">Contact Us</h4>
//             <ul className="space-y-3">
//               <li className="flex items-center gap-3 text-white/70">
//                 <Mail className="w-5 h-5" />
//                 hackathon@srcas.edu.in
//               </li>
//               <li className="flex items-center gap-3 text-white/70">
//                 <Phone className="w-5 h-5" />
//                 +91 98765 43210
//               </li>
//               <li className="flex items-center gap-3 text-white/70">
//                 <MapPin className="w-5 h-5" />
//                 Coimbatore, Tamil Nadu
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom bar */}
//         <div className="pt-8 border-t border-white/10 text-center">
//           <p className="text-white/60 text-sm">
//             © 2026 SRCAS Programming Club. Partnered with L&T Technology Services.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function Home() {
  return (
    <main className="bg-transparent">
      <HeroSection />
      <DodgeHero />
      <AboutSection />
      <ProblemSection />
      <FaqList />
      <GuidelinesSection />
      <PrizesSection />
      <Timeline />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
